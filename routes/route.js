const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

//Get homepage
router.get('/',(req,res) => {
    res.render('pages/home',{
        title: 'Home'
    })
});


//Get anime page and all anime
const animeApiUrl = "https://anime-facts-rest-api.herokuapp.com/api/v1";
router.get('/anime',async (req,res) => {
    const fetchAnime = await fetch(animeApiUrl);
    const json = await fetchAnime.json();
    res.render('pages/anime',{
        title: 'Anime',
        json: json
    });
});


//Get facts of a specific anime
router.post('/anime/search',async (req,res) => {
    let animeQuery = req.body.asearch;
    const animeFactApiUrl = `https://anime-facts-rest-api.herokuapp.com/api/v1/${animeQuery}`
    const specificAnime = await fetch(animeFactApiUrl);
    const data = await specificAnime.json();
    
    res.render('pages/animeSearch',{
        title:"Specific Anime",
        data: data
    })
});


//Get the book page and list of books
const fakerBooksUrl = "https://fakerapi.it/api/v1/books?_quantity=20";
router.get('/books',async (req,res) => {
  const fetchBooks = await fetch(fakerBooksUrl);
  const json = await fetchBooks.json();
  res.render('pages/books',{
      title: 'Books',
      json: json
  });
});

//Get the address page
router.get('/address',(req,res) => {
    res.render('pages/address',{
        title: "Addresses"
    });
});

//Get list of addresses
const fakerAddressUrl = "https://fakerapi.it/api/v1/addresses?_quantity=10"
router.get('/addressdata',async (req,res) => {
    const fetchAddress = await fetch(fakerAddressUrl);
    const data = await fetchAddress.json();
    res.json(data);
})


module.exports = router;