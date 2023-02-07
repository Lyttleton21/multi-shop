const { UUIDV4 } = require("sequelize"); 
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoty: {
            type: DataTypes.STRING,
            allowNull:false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        old_price: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        star: {
            type: DataTypes.REAL,
            allowNull:false
        },
        imageUrl:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        colors:{
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    }, {
        timestamps: true
    })
    return product;
}