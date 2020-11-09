const express = require('express');
const router = express.Router();
var productos = [
    {id:1, name:'producto 1' },
    {id:2, name:'producto 2' },
    {id:3, name:'producto 3' },
    {id:4, name:'producto 4' },
    {id:5, name:'producto 5' },
    {id:6, name:'producto 6' },
]

var bonos = [
    {id:1, name:'producto 2', description: 'prueba', product_id:1 , valid_since: '2020-02-25T00:00:00.000', valid_until: '2020-02-25T23:59:00.999'},

]

const auth = (req,res,next ) => {
    let auth = req.headers.auth;
    if(auth == "admin"){
        next();
    }else{
        res.status(200).json({

            message : 'Error 401'
        });
    }
}
const authCustomer = (req,res,next ) => {
    let auth = req.headers.auth;
    if(auth == "customer"){
        next();
    }else{
        res.status(200).json({

            message : 'Error 401'
        });
    }
}
const getAllProducts = (req, res) => {
    
    res.status(200).json({
        ok:true,
        data : productos
    });
}
const getAOneProduct = (req, res) => {

    res.status(200).json({
        ok:true,
        data : productos.find(data => data.id === +req.params.id)
    });
}

const CreateOneBono = (req, res) => {
    // console.log(bonos.length + 1);
    bonos.push({
        id: bonos.length + 1,
        name: req.body.name,
        description: req.body.description,
        product_id: req.body.product_id,

    })
    res.status(200).json({
        ok:true,
        data : bonos
    });
}
const getAllBonos = (req, res) => {
    // console.log(bonos.length + 1);
    
    res.status(200).json({
        ok:true,
        data : bonos
    });
}

router.get('/productos/:id', [auth, getAOneProduct]); 
router.get('/productos', [auth, getAllProducts]); 
router.post('/bono/create', [auth, CreateOneBono]); 
router.get('/bonos', [auth, getAllBonos]); 


module.exports = router;