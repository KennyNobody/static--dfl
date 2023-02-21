const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionHeaderInvert = fs.readFileSync("src/includes/section-header-invert.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const sectionPartners = fs.readFileSync("src/includes/section-partners.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "DFL",
        head,
        sectionHeader,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/search-result.html",
        filename: "search-result.html",
        inject: "body",
        title: "Результаты поиска | DFL",
        head,
        sectionHeader,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/privacy.html",
        filename: "privacy.html",
        inject: "body",
        title: "Политика конфиденциальности | DFL",
        head,
        sectionHeader,
        sectionFooter,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/offers.html",
        filename: "offers.html",
        inject: "body",
        title: "Перевозчикам | DFL",
        head,
        sectionHeaderInvert,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/projects.html",
        filename: "projects.html",
        inject: "body",
        title: "Проектные перевозки | DFL",
        head,
        sectionHeaderInvert,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/job.html",
        filename: "job.html",
        inject: "body",
        title: "Работа | DFL",
        head,
        sectionHeaderInvert,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/single-job.html",
        filename: "single-job.html",
        inject: "body",
        title: "Вакансия | DFL",
        head,
        sectionHeaderInvert,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/contacts.html",
        filename: "contacts.html",
        inject: "body",
        title: "Контакты | DFL",
        head,
        sectionHeaderInvert,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/about.html",
        filename: "about.html",
        inject: "body",
        title: "О нас | DFL",
        head,
        sectionHeaderInvert,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/info.html",
        filename: "info.html",
        inject: "body",
        title: "Полезная информация | DFL",
        head,
        sectionHeaderInvert,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/single-post.html",
        filename: "single-post.html",
        inject: "body",
        title: "Новость | DFL",
        head,
        sectionHeader,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/single-article.html",
        filename: "single-article.html",
        inject: "body",
        title: "Статья | DFL",
        head,
        sectionHeader,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/single-project.html",
        filename: "single-project.html",
        inject: "body",
        title: "Одиночный проект | DFL",
        head,
        sectionHeader,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/news.html",
        filename: "news.html",
        inject: "body",
        title: "Новости | DFL",
        head,
        sectionHeader,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/articles.html",
        filename: "articles.html",
        inject: "body",
        title: "Статьи | DFL",
        head,
        sectionHeader,
        sectionFooter,
        sectionPartners,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/handbook.html",
        filename: "handbook.html",
        inject: "body",
        title: "Справочник | DFL",
        head,
        sectionHeader,
        sectionFooter,
        sectionPartners,
        temp
    })
];
