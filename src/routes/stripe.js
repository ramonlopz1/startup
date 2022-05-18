const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post("/paymenty", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        ammount: req.body.amount,
        currency: "brl",

    }, (stripeErr, stripRes) => {
        if(stripeErr) {
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripRes)
        }
    })
})

module.exports = router;