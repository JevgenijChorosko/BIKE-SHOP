const jwt = require("jsonwebtoken")
const {secret} = require("../config")

module.exports = function (roles) {
    return function(req, res, next) {
        if(req.method === "OPTIONS") {
            next()
            }
        
            try {
                const token = req.headers.autorization.split("")[1]
                if(!token) {
                    return res.status(403).json(body: {message: "User is not singed in"})
                }
                const {roles: userRoles} = jwt.verify(token, secret)
                let hasRole = false 
                userRoles.forEach(role => {
                    if(roles.icludes(role)) {
                        hasRole = true
                    }
                })
                if(!hasRole) {
                    return res.status(403).json(body: {message: "Acces denied"})
                }
                next()
            } catch (e) {
                return res.status(403).json(body: {message: "User is not singed in"})
            }  
    }
};