
const Sequelize = require('sequelize');
const sequelize = require('../../config/connection');
const Product = require('../models/product')(sequelize, Sequelize);
const asyncHandler = require('express-async-handler');

Product.sync({alter:true});

exports.productController = {
    saveProduct: asyncHandler(
        async(req, res) => {
            const data = req.body;
            try {
                const product = await Product.create(data);
                if(!product instanceof Product){
                    res.send({
                        message:'Food is unable to create!!!'
                    });
                }else{
                    res.status(200).send({
                    message:'Created successfully' 
                });
                }
            } catch (error) {
                console.log(error);
                res.send('Error in creating Product');
            }
        }
    ),
    getAllProducts: asyncHandler(
        async (req, res) => {
            try {
                const $getAllProducts = await Product.findAll({
                    raw:true,
                });
                if(!$getAllProducts){
                    res.send({
                        message:'Unable to get products'
                    });
                }else{
                    res.send($getAllProducts);
                }
            } catch (error) {
                console.log(error);
            }
        }
    ),
    getAllProductsRandomly: asyncHandler(
        async (req, res) => {
            try {
                const $getAllProducts = await Product.findAll({
                    raw:true,
                    order: sequelize.random(),
                });
                if(!$getAllProducts){
                    res.send({
                        message:'Unable to get products'
                    });
                }else{
                    res.send($getAllProducts);
                }
            } catch (error) {
                console.log(error);
            }
        }
    ),
    findProductById: asyncHandler(
        async (req, res) => {
            const {id} = req.params;
            try {
                //console.log(id);
                const $findProductById = await Product.findByPk(id);
                if($findProductById === null){
                    res.status(404)
                    .send('Unable to find the id you enter!!!');
                    //console.log('Product not found');
                }else{
                    res.status(200)
                    .send($findProductById);
                }
            } catch (error) {
                console.log(error.message);
                res.status(500)
                .send("Server Error: Please contact the developers");
            }
        }
    ),
    findProductByName: asyncHandler(
        async (req, res) => {
            try {
                const {name} = req.params;
                const findProductByName = await Product.findAll({
                    where: {
                        name: {
                            [Sequelize.Op.iLike] : `%${name}%`
                        }
                    },
                    order: sequelize.random(),
                    raw:true
                });
                if(findProductByName === null){
                    res.send('ERROR');
                }else{
                    res.send(findProductByName);
                }
            } catch (error) {
                console.log(error);
            }
        }
    ),
    getProductByMostFavorite: asyncHandler(
        async (req, res) => {
            try {
                const $getProductByMostFavorite = await Product.findAll({
                    raw:true,
                    order: ['star', 'DESC']
                });
                if ($getProductByMostFavorite === null) {
                    res.send('Product Not Found');
                } else {
                    res.send($getProductByMostFavorite);
                }
            } catch (error) {
                console.log(error);
            }
        }
    ),
    getOnlyThree: asyncHandler(
        async (req, res) => {
            try {
                const $getOnlyThree = await Product.findAll({
                    raw:true,
                    limit:3,
                    order: sequelize.random()
                });
                if(!$getOnlyThree){
                    res.send({
                        message:'Unable to get products'
                    });
                }else{
                    res.send($getOnlyThree);
                }
            } catch (error) {
                console.log(error);
            }
        }
    )
}