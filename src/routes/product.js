const Product = require('../models/Product')
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();

// CREATE: apenas admins podem criar produtos

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE
/**
 * verifyTokenAndAuthorization: recebe e testa o token vindo
 * do headers e verifica se o id associado ao token corresponde com o id do usuário.
 */
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

    // Procura o Product no mongoDB pelo ID e Atualiza
    try {
        const updatedProduct = await Product.findByIdAndUpdate


            (req.params.id, { $set: req.body }, { new: true })

        res.status(200).json(updatedProduct)

    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET Product

router.get("/find/:id", async (req, res) => {
    try {
        const Product = await Product.findById(req.params.id)
        res.status(200).json(Product);
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL ProductS

router.get("/", async (req, res) => {
    // recebe o parâmetro new vindo no url
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;

        if(qNew) {
            products = await Product.find().sort({createdAt: -1}).limit(5)
        } else if (qCategory) {
            products = await Product.find({categories: {
                $in: [qCategory],
            }})
        } else {
            products = await Product.find()
        }

        res.status(200).json(products)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router