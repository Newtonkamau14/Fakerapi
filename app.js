const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 3000;
const app = express()


//Middleware
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('layout','layouts/layout');
app.use(express.static('public'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Route prefix
app.use('',require('./routes/route'));


//Listening on port 3000
app.listen(PORT,() => {
    console.log(`Listening on port at http://localhost:${PORT}`)
})