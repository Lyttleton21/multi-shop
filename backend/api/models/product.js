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
        },
        size:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:false,
            defaultValue:['XS', 'S', 'M', 'L', 'XL']
        },
        description:{
            type: DataTypes.TEXT,
            allowNull:false,
            defaultValue: 
            "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt. Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.",
        },
        information:{
            type: DataTypes.TEXT,
            allowNull:false,
            defaultValue: "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt."
        }
    }, {
        timestamps: true
    })
    return product;
}