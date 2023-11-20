const express = require("express")
const products = require("../controllers/product.controller")

const router = express.Router()
router.route("/showAllProduct")
    .get(products.showAllProduct)
router.route("/showProductByType/:type")
    .get(products.showProductByType)
router.route("/showProductByMaHH/:maHH")
    .get(products.showProductByMaHH)

router.route("/addProduct")
    .post(products.addProduct)

router.route("/deleteProduct/:maHH")
    .delete(products.deleteProduct)
router.route("/minusProduct/:maHH/:sl")
    .put(products.minusProduct)
router.route("/updateProduct")
    .put(products.updateProduct)

module.exports = router