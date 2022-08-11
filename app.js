const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')
const bookController = require('./routes/bookController');
const axios = require('axios');
const fetch = require('node-fetch')
const PORT = process.env.PORT || 3000;
const app = express()


//Middleware
app.use(expressLayouts)
app.set('view engine','ejs')
app.set('layout','layouts/layout')
app.use(express.static('public'))
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


//Routes
app.use('/books',bookController)

//Homepage
app.get('/',(req,res) => {
    res.render('pages/home',{
        title: 'Home'
    })
});

//Get books
const fakerBooksUrl = "https://fakerapi.it/api/v1/books?_quantity=20"
app.get('/results',async(req,res) =>{
  const fetchBooks = await fetch(fakerBooksUrl);
  const data = await fetchBooks.json();
  res.json(data);
})


app.listen(PORT,() => {
    console.log('Listening on port 3000')
})