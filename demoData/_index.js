const articlesData = require("./articles.json");
const newsData = require("./news.json");
const searchResult = require("./searchResult.json");

module.exports = () => ({
    articles: articlesData,
    news: newsData,
    search: searchResult
});
