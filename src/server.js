const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const path = require('path')
const engines = require('consolidate')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

dotenv.config();
app.set('views', path.join(__dirname, '/view') )
app.engine('html', engines.mustache);
app.set('view engine', "html")

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connection successfull")
    }).catch((err) => { 
        console.log(err) 
    })

app.get('/', (req, res) => {
    res.render('index.html')
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("."))

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running.")
})