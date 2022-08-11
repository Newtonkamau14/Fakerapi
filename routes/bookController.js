const express = require('express')
const axios = require('axios')
const fetch = require('node-fetch')
const router = express.Router()



//Get the book page
router.get('/',(req,res) => {
  res.render('pages/books',{
      title: 'Books',
  });
});


module.exports = router; 