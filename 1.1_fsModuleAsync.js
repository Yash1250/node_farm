/** @format */

const fs = require("fs");

fs.readFile("./text/inpput.txt", "utf-8", (err, data1) => {
  if (err) {
    console.log("error aa gaya bhai🔴");
    return;
  }
  console.log(data1);
});
fs.writeFile(
  "./text/output.txt",
  "This is written by using async code",
  "utf-8",
  (err) => {}
);
