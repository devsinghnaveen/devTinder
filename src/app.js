// <---------- Creating  backend server ------------------->

const express = require('express');
const app = express();

// Adding multiple request handlers to the function

// app.use('/user', (req, res, next) => {

//     console.log('Request 1');
//     // res.send('Response 1');
//     next();
// },
//     (req, res, next) => {
//         console.log('Request 2');
//         // res.send('Response 2 '); 
//         next();

//     },

//     (req, res) => {
//         console.log('Request 3');
//         res.send('Response 3')
//     }
// )

// All the functions that come before handling the final send from server are called middlewares

// The final function which sends the response is called request handler.

// app.use('/newuser', (req, res, next) => {

//     console.log('handling /newuser route');
//     next()
// })

// app.use('/newuser', (req, res, next) => {

//     console.log('handling /newuser route');
//     res.send('Response send !')
// })



// Understanding with example why middleware is important 
// Taking the example of Authentication

// app.get('/admin', (req, res, next) => {

//     const token = 'XYZ';
//     const isUserAutherized = token === 'XYZ';
//     if (!isUserAutherized) {

//         res.send('You are not an authorised user !')
//     }
//     else {
//         console.log('admin route called !')
//         next();
//     }

// })

// app.get('/admin/getAllUsers', (req, res, next) => {

//     res.send('All Users');
// })

// app.get('/admin/deleteAllUsers', (req, res, next) => {

//     res.send('All Users Deleted');
// })



// app.listen(3000, () => {
//     console.log('Server is successfully listening on port 3000')
// })


// HANDLING ERRORS IN THE MIDDLEWARES

// It is recommended to handle the error using the try catch, best thing !

app.get('/admin', (req, res) => {

    try {
        throw new Error('EEERRROOORRRRRR');
        res.send('user data sent')

    } catch (error) {
        res.status(500).send('Something went wrong - FROM TRY-CATCH')
    }


})

// Here app.use works as a fallback for all the calls and handles the error gracefully

app.use('/', (err, req, res, next) => {

    if (err) {

        res.status(500).send('Something went wrong');
    }
})

app.listen(3000, () => {
    console.log('Server is successfully listening on port 3000')
})