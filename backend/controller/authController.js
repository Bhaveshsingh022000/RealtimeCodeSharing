const UserModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator/check');

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const pass = req.body.password;
    let fetchedUser;
    UserModel.findOne({ email: email })
        .then(result => {
            // console.log(result);
            if (result) {
                fetchedUser = result;
                return result.password === pass;
            }
            else {
                const error = new Error("user not found");
                error.statusCode = 401;
                error.message = "User not found";
                throw error;
            }
        })
        .then(isEqual =>{
            if(!isEqual){
                const error = new Error('Wrong password');
                error.statusCode = 401;
                throw error;
            }
            res.status(200).json({name: fetchedUser.name});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.postSignUp = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error("Validation Failed");
        error.statusCode = 422;
        error.data = errors.array()[0].msg;
        throw error
    }
    const email = req.body.email;
    const pass = req.body.password;
    const name = req.body.name;
    console.log(email,pass,name);
    res.json({
        message: "ok"
    })
}