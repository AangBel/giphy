const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;


router.get('/:searched', (req, res) => {
    // res.send(response.data); // Replace this
console.log('smoke');
const newUrl = req.body.params.searched;


    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/?api_key=${GIPHY_API_KEY}`
    })
        .then((response) => {
            console.log("get to giphy trending success!", response.data);
            res.send(response.data);
        })
        .catch((err) => {
            console.log("get to giphy trending error!", err);
            res.sendStatus(500);
        })
})


module.exports = router;