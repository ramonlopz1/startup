const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken');
const router = require('express').Router();

router.get('/', verifyTokenAndAuthorization, (req, res) => {
    res.render('painel.html')
})

router.get("/addproduct", verifyTokenAndAdmin, async (req, res) => {
    try {
        res.render('add-product.html')
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router