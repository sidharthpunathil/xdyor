var express = require("express");
var router = express.Router();
let resp;
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("409d03c2dbca429b8e447f38c64e45db");
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2
  .topHeadlines({
    q: "bitcoin",
    category: "business",
    language: "en",
    country: "us",
  })
  .then((response) => {
    let articles = response.articles;
    console.log(articles);
    return articles;
    });
    
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { page: "Home", menuId: "home" });
});

router.get("/dashboard", function (req, res, next) {
  res.render("dashboard", {});
});

router.get("/charts", function (req, res, next) {
  res.render("charts", {});
});

router.get("/news", function (req, res, next) {
  res.render("news", {});
});

module.exports = router;
