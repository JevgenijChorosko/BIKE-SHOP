const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator")
const {secret} = require("./models/config")
const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
}


class authController {
  async registration(req, res) {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({message: "Registration ERROR", errors})
        }
        const {username, password} = req.body
        const candidate =  await User.findOne({username})
        if(candidate) {
            return res.status(400).json({message: "This User is already registered"})
        }
        const hashPassword =bcrypt.hashSync(password, 7);
        const userRole = await Role.findOne({value: "USER"})
        const user = new User({username, passwor: hashPassword, roles: [userRole.value]})
        await user.save()
        return.res.json({message: "User is registered"})
    } catch (e) {
        res.status(400).json({message: "Registration error"})
    }
  }
  async login(req, res) {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(!user) {
            return res.status(400).json({message: "User ${username} not found!"})
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword) {
            return res.status(400).json({message: "Password is not valid"})
        }
        const token = generateAccessToken(user._id, user.roles)
        return res.json({token})

    } catch (e) {
        res.status(400).json({message: "Login error"})
    }
  }

  async getUsers(req, res) {
    try {
        const users = await User.find()
    //   const userRole = new Role();
    //   const adminRole = new Role({ value: "ADMIN" });
    //   await userRole.save();
    //   await adminRole.save();
      res.json(users);
    } catch (e) {}
  }
}

module.exports = new authController();
