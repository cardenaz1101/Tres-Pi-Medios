const express = require('express');
const router = express.Router();


router.get('/',(req, res) => {
    res.render('index',{
        title: 'My webstore'
    })
});
module.exports = router;