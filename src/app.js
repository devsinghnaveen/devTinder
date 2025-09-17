
// <---------- Creating  backend server ------------------->

const express = require('express');

const app = express();

app.get('/abc', (req, res) => {
    res.send({ firstName: "Naveen", lastName: "Singh" })
})


app.post('/user', (req, res) => {
    res.send("Data was successfully saved in the server")
})

app.delete('/user', (req, res) => {
    res.send('User was successfully deleted')
})

app.use('/user', (req, res) => {
    res.send("Hello from the server")
})


app.listen(3000, () => {
    console.log('Server is successfully listening on port 3000')
})


