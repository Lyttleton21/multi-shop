module.exports = (sequqlize, DataTypes) => {
    const cartgory =  sequqlize.define('cartgory', {
        imageUrl:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    }, {
        timestamps: false,
    })
    return cartgory;
}