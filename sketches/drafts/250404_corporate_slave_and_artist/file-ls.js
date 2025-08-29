const fs = require("fs");
const path = require("path");

const folderPath = "./images";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file, index) => {
    const filePath = path.join(folderPath, file);
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(`Error getting stats for ${file}:`, err);
        return;
      }

      // console.log(`${file}: ${stats.isDirectory() ? "Directory" : "File"}`);
      console.log(`images.push(loadImage("./images/${file}"))`);
      // console.log(`let img${index} = loadImage(${file})`);
    });
  });
});
