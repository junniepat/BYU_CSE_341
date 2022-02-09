const { check, validationResult } = require('express-validator');

const user = {
    email: "patrick@igwe.com",
    password: '123456789',
    username: 'Patrick Igwe'
}


exports.getSignin = (res, req, next) => {

}


exports.postSignin = (req, res, next) => {
    // validationResult function checks whether
    // any occurs or not and return an object
    const errors = validationResult(req);
 
    // If some error occurs, then this
    // block of code will run
    if (!errors.isEmpty()) {
        //    res.json(errors)
        console.log(errors)

        res.render('pages/signin', {
            title: `Log In`,
            msgs: errors.errors,
            path: '/signin',
            isLoggedIn: false
        });
    }

    if(req.body.email === user.email && req.body.password === user.password) {
        console.log('success')
        res.render('pages/signin', {
            title: `Logged in as ${user.username}`,
            path: '/signin',
            msgs: ['Logged In'],
            username: user.username,
            isLoggedIn: true
        });
        return;
    } 

    res.render('pages/signin', {
        title: `Log In`,
        msgs: errors.errors,
        path: '/signin',
        isLoggedIn: false
    });

}