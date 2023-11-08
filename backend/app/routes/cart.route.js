const express = require("express")
const cart = require("../controllers/cart.controller")

const router = express.Router()
router.route("/create_cart")
    .post(cart.create_cart)
router.route("/update_cart/:id")
    .put(cart.update_cart)
router.route("/add_product/:maDH")
    .post(cart.add_product)
router.route("/delete_product/:id")
    .delete(cart.delete_product)
    
module.exports = router