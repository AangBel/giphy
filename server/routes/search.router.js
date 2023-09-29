const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv").config();
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

router.get("/:searched", (req, res) => {
  // res.send(response.data); // Replace this
  console.log("smoke");
  // req.body grabs data from the request body (aka: if we send an object as 'data' to the server, post and put use this)
  // req.params grabs data from the request url (aka /:search, get and delete use this)
  const newUrl = req.params.searched;
  console.log(newUrl);

  axios({
    method: "GET",
    // url: `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}`,
    url: `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${newUrl}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  })
    .then((response) => {
      console.log("get to giphy trending success!", response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log("get to giphy trending error!", err);
      res.sendStatus(500);
    });
});

module.exports = router;
