const router = require('express').Router();
const User = require('../models/User') // modelo de objeto que será enviado ao mangoDB
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')


// REGISTER
router.post('/register', async (req, res) => {
    
    // Cria objeto que será enviado ao mongoDB, com parâmetros vindo do formulário
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try {
        const savedUser = await newUser.save() // função save do Schema() do mongoDB
        res.status(201).json(savedUser)
    } catch(err) {
        res.status(500).json(err)
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    try {

        // Recebe o objeto vindo do DB
        const user = await User.findOne({
            username: req.body.username
        })

        // Testa se o usuário existe no mongoDB
        !user && res.status(401).json("Wrong credentials!")

        // Faz o decrypt da password
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
        
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)


        originalPassword !== req.body.password && 
            res.status(401).json("Wrong credentials!")
            
            // Cria um token de acesso para o JSON
            // e associa o id do user à esse token.
            const acessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            }, process.env.JWT_SEC, { expiresIn: "3d" })

            // cria um objeto com os dados do usuário e remove o password.
            const {password, ...others} = user._doc;

            // retorna um objeto com os dados do usuário, menos o password
//          
            const dataUser = { ...others, acessToken }
            
            req.session.token = acessToken

            res.redirect(`/api/painel`)

    } catch(err) {
        console.log(err + "ERROOOO")
    }
})

module.exports = router