const express = require("express")
const users = require("../controllers/user.controller")

const router = express.Router()

router.route("/showall")
    .get(users.showAllUser)
    
router.route("/getUserByEmail/:email")
    .get(users.getUserByEmail)

router.route("/addUser/:email")
    .get(users.addUser)


router.route("/getUserById/:id")
    .get(users.getUserById)

router.route("/updateUser/:id")
    .put(users.updateUser)

router.route("/deleteUser/:email")
    .delete(users.deleteUser)
    
module.exports = router