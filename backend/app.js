const express = require("express")
const ApiError = require("./app/api-error")
const contactsRouter = require("./app/routes/contact.route")

const ProductRouter = require("./app/routes/products.route")
const CartRouter = require("./app/routes/cart.route")
const UserRouter = require("./app/routes/user.route")
const AccountRouter = require("./app/routes/account.route")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/product", ProductRouter)
app.use("/api/account", AccountRouter)
app.use("/api/cart",CartRouter)
app.use("/api/user",UserRouter)


app.use("/api/contact", contactsRouter)




app.use((req,res,next)=>{
    return next(new ApiError(404, "Resource not found"))
})

app.use((err, req, res, next)=>{
    return res.status(err.statusCode || 500).json({
        message : err.message || "Internal Server Error"
    })
})

module.exports = app