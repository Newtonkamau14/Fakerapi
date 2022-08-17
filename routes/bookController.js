const express = require('express')
const fetch = require('node-fetch');
const router = express.Router()



//Get the book page
router.get('/',(req,res) => {
  res.render('pages/books',{
      title: 'Books',
  });
});

//Get list of books
const fakerBooksUrl = "https://fakerapi.it/api/v1/books?_quantity=20";
router.get('/results',async (req,res) => {
  const fetchBooks = await fetch(fakerBooksUrl);
  const data = await fetchBooks.json();
  res.json(data);
});


module.exports = router; 