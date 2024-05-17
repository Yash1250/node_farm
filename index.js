/** @format */

const http = require("http");
const fs = require("fs");
const url = require("url");

//our modules

const replaceTemplate = require("./modules/replaceTemplate");

const apiData = fs.readFileSync("./data/data.json", "utf-8");
const data = JSON.parse(apiData);
const tempOverview = fs.readFileSync(
  "./templates/template-overview.html",
  "utf-8"
);
const tempCard = fs.readFileSync("./templates/template-card.html", "utf-8");
const tempProduct = fs.readFileSync(
  "./templates/template-product.html",
  "utf-8"
);

const server = http.createServer((request, response) => {
  const { query, pathname } = url.parse(request.url, true);
  let templateHTML = data
    .map((elem) => replaceTemplate(tempCard, elem))
    .join("");
  // console.log(templateHTML);
  let templateOverview = tempOverview.replace(
    "{%PRODUCT_CARDS%}",
    templateHTML
  );
  let path = request.url;
  if (pathname === "/about") {
    response.end("About section");
  } else if (pathname === "/contact") {
    response.end("contact us");
  } else if (pathname === "/api") {
    response.writeHead(200, {
      "Content-type": "application/json",
    });
    response.end(apiData);
  } else if (pathname === "/product") {
    response.writeHead(200, {
      "Content-type": "text/html",
    });
    const currProduct = replaceTemplate(tempProduct, data[query.id]);
    // console.log(currProduct);
    response.end(currProduct);
  } else {
    response.writeHead(200, {
      "Content-type": "text/html",
    });
    response.end(templateOverview);
  }
});

server.listen(2000, "127.0.0.1", () => {
  console.log("server on 2000 port is started");
});
