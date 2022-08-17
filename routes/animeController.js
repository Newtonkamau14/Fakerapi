const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

//Get anime page
router.get('/',(req,res) => {
    res.render('pages/anime',{
        title: 'Anime'
    });
});

//Get all anime
const animeApiUrl = "https://anime-facts-rest-api.herokuapp.com/api/v1";
router.get('/results',async (req,res) => {
    const fetchAnime = await fetch(animeApiUrl);
    const data = await fetchAnime.json();
    res.json(data);
})
//Get facts of a specific anime
const animeFactApiUrl = "https://anime-facts-rest-api.herokuapp.com/api/v1/:anime_name"


module.exports = router;