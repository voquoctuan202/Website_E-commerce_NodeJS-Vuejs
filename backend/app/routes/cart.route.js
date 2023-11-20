const express = require("express")
const cart = require("../controllers/cart.controller")

const router = express.Router()

router.route("/create_cart/")
    .post(cart.create_cart)

router.route("/getAllCart")
    .get(cart.getAllCart)
router.route("/getAllHHInCart")
    .get(cart.getAllHHInCart)
router.route("/getCartByMaDH/:maDH")
    .get(cart.getCartByMaDH)
router.route("/getCartDangMua/:email")
    .get(cart.getCartDangMua)
router.route("/getDSDonHang/:email")
    .get(cart.getDSDonHang)
router.route("/getDSHHByMaDh/:maDH")
    .get(cart.getDSHHByMaHH)
router.route("/getCartByEmail/:email")
    .get(cart.getCartByEmail)


router.route("/update_cart/:id")
    .put(cart.update_cart)

router.route("/add_product/")
    .post(cart.add_product)

router.route("/delete_product/:id")
    .delete(cart.delete_product)
router.route("/deleteDH/:maDH")
    .delete(cart.deleteDH)
router.route("/deleteProInCart/:maDH")
    .delete(cart.deleteProInCart)
module.exports = router