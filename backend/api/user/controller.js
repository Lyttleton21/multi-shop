const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const sequelize = require('../../config/connection');
const User = require('../models/user')(sequelize, Sequelize);
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const {Op} = require('sequelize');

User.sync({alter:true});

exports.userController = {
    //! Creating a New User Account Start
    signUp: asyncHandler(
        async (req, res) => {
            try {
                //TODO: (save user if email isn't in the database)
                const [user, created] = await User.findOrCreate({
                    where: {email: req.body.email},
                    defaults: {
                        name: req.body.name,
                        email: req.body.email.toLowerCase(),
                        isAdmin: req.body.isAdmin,
                        address: req.body.address,
                        password: await bcrypt.hash(req.body.password, 10)
                    }
                });
                if (!created) {
                    //TODO: email is in the database
                        res.status(400)
                        .send('User already exist, plaase login!');
                } else {
                    //TODO: email is not in the database Create a new account
                    let token = jwt.sign({userId: user.id, user_admin: user.admin},
                    process.env.SECRET, {expiresIn: '10m'});
                    res.status(200)
                        .send({
                        user: user,
                        token: token
                    });
                }
            } catch (error) {
                console.log(error.message);
                res.status(500)
                .json("Server Error: Please Contact the Developers");;
            }
        }
    ),
    //! Creating a New User Account End

    loginUser: asyncHandler(
        async (req, res) => {
            try {
                const { email, password } = req.body;
                //find a user by their email
                const loginUser = await User.findOne({
                    where: {email : email},
                    attributes: {exclude: ['deletedAt']},
                    raw:true
                });
                //if user email is found, compare password with bcrypt
                if(loginUser){
                    const isSame = await bcrypt.compare(password, loginUser.password);
                    //if password is the same
                    //generate token with the user's id and the secretKey in the env file
                    if(isSame){
                        let token = jwt.sign({userId: loginUser.id, user_admin:loginUser.isAdmin},
                            process.env.SECRET, {expiresIn: '10m'});
                            res.status(200)
                            .send({
                                token:token,
                                loginUser:loginUser
                            });
                    }else{
                        return res.status(401)
                        .send('The password you enter is incorrect');
                    }
                }else{
                    return res.status(401)
                    .send('The Email you enter is incorrect');
                }
            } catch (error) {
                console.log(error.message);
                res.status(500)
                .json("Server Error: Please Contact the Developers");
            }
        }
    ),

    REFEASH_TOKEN: asyncHandler(
        async (req, res) => {
            try {
                const {id} = req.body;
                const token = jwt.sign({user: id}, 
                    process.env.REFEASH_TOKEN);
                    console.log(`REFEASH_TOKEN ${token}`);
                    res.send(token);
            } catch (error) {
                res.status(500)
                .send("Server Error: Please Contact Developer");
                console.log(error.message);
            }
        }
    ),

    deleteAccount: asyncHandler(
        async (req, res) => {
            try {
                const {email} = req.body;
                const _deleteAccount = await User.destroy({
                    where: {
                        email:email
                    }
                });
                if (_deleteAccount){
                    res.send('Account Deleted Successfully');
                }else{
                    res.send("Unable to delete account");
                }
            } catch (error) {
                res.status(505)
                .json("Server Error: Please Contact the Developers");
                console.log(error.message);
            }
        }
    )
}
