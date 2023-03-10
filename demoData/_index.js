const newsData = require("./news.json");
const searchResult = require("./searchResult.json");

module.exports = () => ({
    news: newsData,
    search: searchResult
});
