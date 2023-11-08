const express = require("express")
const products = require("../controllers/product.controller")

const router = express.Router()
router.route("/showAllProduct")
    .get(products.showAllProduct)
router.route("/showProductByType/:type")
    .get(products.showProductByType)
router.route("/showProductById/:id")
    .get(products.showProductById)
router.route("/addProduct")
    .post(products.addProduct)
router.route("/deleteProduct/:id")
    .delete(products.deleteProduct)
    
module.exports = router