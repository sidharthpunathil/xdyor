var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
let resp;
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("409d03c2dbca429b8e447f38c64e45db");
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

const getNews = async () => { 

  let result = newsapi.v2.topHeadlines({
    q: "bitcoin",
    category: "business",
    language: "en",
    country: "us",
  })
  
  return await result
}


const main = async () => {
  let data = await getNews()
  let articles = data.articles;
  console.log(articles);
  //   return articles;

    router.get("/", function (req, res, next) {
      res.render("index", { page: "Home", menuId: "home"});
    });

    router.get("/dashboard", function (req, res, next) {
      res.render("dashboard", {});
    });
    
    router.get("/charts", function (req, res, next) {
      res.render("charts", {});
    });
    
    router.get("/news", function (req, res, next) {
      res.render("news", {articles: "articles"});
    });

}

main();
module.exports = router;
