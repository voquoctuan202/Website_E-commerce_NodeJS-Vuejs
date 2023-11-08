const express = require("express")
const accounts = require("../controllers/account.controller")

const router = express.Router()

router.route("/register")
    .post(accounts.register)
router.route("/login")
    .post(accounts.login)
router.route("/getAccountById/:id")
    .get(accounts.getAccountById)
router.route("/deleteAccount/:id")
    .delete(accounts.deleteAccount)
module.exports = router