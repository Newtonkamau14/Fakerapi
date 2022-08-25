const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

//Get anime page and all anime
const animeApiUrl = "https://anime-facts-rest-api.herokuapp.com/api/v1";
router.get('/',async (req,res) => {
    const fetchAnime = await fetch(animeApiUrl);
    const json = await fetchAnime.json();
    res.render('pages/anime',{
        title: 'Anime',
        json: json
    });
});


//Get facts of a specific anime
router.post('/search',async (req,res) => {
    let animeQuery = req.query.asearch;
    const animeFactApiUrl = `https://anime-facts-rest-api.herokuapp.com/api/v1/:${req.query.asearch}`
    const specificAnime = await fetch(animeFactApiUrl);
    const data = await specificAnime.json();
    res.send(data)
});



module.exports = router;