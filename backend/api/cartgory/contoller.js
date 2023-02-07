const Sequelize = require('sequelize');
const sequelize = require('../../config/connection');
const Cartgory = require('../models/cartgory')(sequelize, Sequelize);
const asyncHandler = require('express-async-handler');

Cartgory.sync();

exports.cartgoryContoller = {
    
}