const { check, validationResult } = require('express-validator');

const user = {
    email: "patrick@igwe.com",
    password: '7878',
    username: 'test'
}


exports.getSignin = (res, req, next) => {

}


exports.postSignin = (res, req, next) => {
    // validationResult function checks whether
    // any occurs or not and return an object
    const errors = validationResult(req);
 
    // If some error occurs, then this
    // block of code will run
    if (!errors.isEmpty()) {
       console.log('errors', errors)
    }

    if(req.body.email === user.email && req.body.password === user.password) {
        console.log('success')
        res.redirect('/signin')
    }
    console.log('failed')
}