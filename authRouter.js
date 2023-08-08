const Router = require("express");
const router = new Router();
const controller = require("/authController");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

router.post(
  "/registration",
  [
    check("username", "Username should be filled").notEmpty(),
    check("password", "Password should be not less than 10 simbols").isLength({
      min: 0,
      max: 10,
    }),
  ],
  controller.registartion
);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["USER", "ADMIN"]), controller.getUsers);

module.exports = router;
