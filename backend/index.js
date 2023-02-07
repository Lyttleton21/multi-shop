'use strict'

const express = require('express');
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');
const port = 5555;
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();

const product = require('./api/product/route');
const cartgory = require('./api/cartgory/route');

const router = express.Router();
app.use(cors());
product.productRoute(router);
cartgory.cartgoryRoute(router);

app.use(
    cookieSession({
        name: "MULTI_SHOP",
        secret: process.env.HTTP_ONLY,
        httpOnly:true
    })
);

router.use( function(req, res, next)  {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, X-Requested-With, Range, Content-Type');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200);
    }else{
        return next();
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

router.get('/', (req, res) =>{
    res.send('Server is up...Catch ya!');
});

app.use(router);
app.listen(port, () =>{
    console.log(`My server is listening on port ${port}`);
});