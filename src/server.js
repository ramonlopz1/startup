const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const path = require('path')
const engines = require('consolidate')
const session = require('express-session')

// routes
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const painelRoute = require('./routes/painel')

dotenv.config();

// views config
app.set('views', path.join(__dirname, '/view') )
app.engine('html', engines.mustache); // assign the swig engine to .html files
app.set('view engine', "html") // set .html as the default extension

// Connect mongoDB via url do .env
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connection successfull")
    }).catch((err) => { 
        console.log(err) 
    })

// views
app.get('/', (req, res) => res.render('index.html'))
app.get('/login', (req, res) => res.render('login.html'))
app.get('/register', (req, res) => res.render('register.html'))


// config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("."))
app.use(session({
    secret: process.env.JWT_SEC,
    saveUninitialized: false,
    resave: false
}))


// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/painel", painelRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running.")
})