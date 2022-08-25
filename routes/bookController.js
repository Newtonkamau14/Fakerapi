const express = require('express')
const fetch = require('node-fetch');
const router = express.Router()


//Get the book page and list of books
const fakerBooksUrl = "https://fakerapi.it/api/v1/books?_quantity=20";
router.get('/',async (req,res) => {
  const fetchBooks = await fetch(fakerBooksUrl);
  const json = await fetchBooks.json();
  res.render('pages/books',{
      title: 'Books',
      json: json
  });
});



module.exports = router; 