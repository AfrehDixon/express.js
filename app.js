const express = require('express');
const app = express();
const logger = require ('./logger')
const {products , people} = require('./data')

// req => middleware =>res

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.get('/api/people' , (req,res)=>{
    res.status(200).json({sucess :true, data : people})
})


app.post('/login' , (req,res)=>{
    const {name,password} = req.body
    if (name && password) {
        return res.status(200).send(`Welcome ${name} and your password is ${password}`)
    }
    else{
        res.status(404).send(`Plese Provide correct credentials`)
    }
    
})

app.get('/', logger, (req, res) => {
    
   res.send('<h1>Home Page</h1><a href="/about">About</a><a href="/services">Services</a><a href="/contact">Contact</a><a href="/contact">Contact</a>')
})

app.get('/about', logger,(req , res) =>{
    res.send('<h1>About Page</h1>')
})
app.get('/services', logger,(req , res) =>{
    res.send('<h1>Services</h1>')
})
app.get('/contact', logger,(req , res) =>{
    res.send('<h1>Contact</h1>')
})




app.listen(5000, () => {
    console.log('Server is running on port 5000');
})