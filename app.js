const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express();
const port = 8001;

// EXPRESS SPECIFICATION STUFF
app.use('/static',express.static('static')); //for serving static files
app.use(express.urlencoded())

// PUG SPECIFICATION STUFF
app.set('view engine', 'pug') // set the templet engin as pug

app.set('views', path.join(__dirname + '/views')); //set the views directory

// ENDPOINTS
app.get('/',(req,res) =>{
    const con = "This is my first web page";
    const params = {'titel':'hello ','content': con} 
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=>{
    name = req.body.name
    phoneno = req.body.phoneno
    email = req.body.email
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `The name of the client is  ${name}, ${phoneno}, ${email}, ${age}, ${gender}, ${address}, ${more}`
    fs.writeFileSync('output.txt', outputToWrite);
    const params = { 'message': 'Your Form Has Been Successfully Submitted!'}
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, () =>{
    console.log(`This app started successfully on port ${port}`)
});