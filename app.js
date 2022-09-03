const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')
const bookController = require('./routes/bookController');
const animeController = require('./routes/animeController');
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
app.use(express.urlencoded({ extended: true }))


//Routes
app.use('/books',bookController);
app.use('/anime',animeController);

//Homepage
app.get('/',(req,res) => {
    res.render('pages/home',{
        title: 'Home'
    })
});

//Listening on port 3000
app.listen(PORT,() => {
    console.log('Listening on port 3000')
})