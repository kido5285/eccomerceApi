const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SEC);

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (err, res) => {
        if(err) {
            return res.status(500).json(err);
        } else {
            return res.status(200).json(res);
        }
    })
})

module.exports = router;