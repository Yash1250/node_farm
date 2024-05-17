/** @format */

const fs = require("fs");

let inputFile = fs.readFileSync("./text/input.txt", "utf-8");
console.log(inputFile);

fs.writeFileSync("./text/output.txt", "I have Written this file without utf-8");

fs.appendFileSync("./text/output.txt", inputFile);

// fs.unlinkSync('./text/trash.txt');

// fs.mkdirSync('newDir');

console.log(fs.readdirSync("text"));
