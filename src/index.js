const express = require("express");

const router = express.Router();

const cocktails = require("../public/js/cocktails");

// router.get('/', (_, response) => {
// response.send('Hello COCKTAILS');
// });

router.get("/", (_, response) => {
  const typesList = new Set();
  cocktails.forEach((cocktail) => {
    typesList.add(cocktail.type);
  });

 