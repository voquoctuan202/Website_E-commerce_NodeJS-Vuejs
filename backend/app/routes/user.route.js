const express = require("express")
const users = require("../controllers/user.controller")

const router = express.Router()

router.route("/showall")
    .get(users.showAllUser)
router.route("/addUser/:matk")
    .post(users.addUser)
router.route("/getUserById/:id")
    .get(users.getUserById)
router.route("/updateUser/:matk")
    .put(users.updateUser)
router.route("/deleteUser/:matk")
    .delete(users.deleteUser)
    
module.exports = router