const fs = require("fs");

const dir = "./";
let str = "# User files of the PC games that I played!\n\n```\n";

fs.unlink("./ReadMe.md", (e) => {
  //   if (e) throw e;
  fs.readdir(dir, function (err, files) {
    files = files
      .map(function (fileName) {
        return {
          name: fileName,
          time: fs.statSync(dir + "/" + fileName).mtime.getTime(),
          isDir: fs.statSync(dir + "/" + fileName).isDirectory(),
        };
      })
      .sort(function (a, b) {
        return b.time - a.time;
      })
      .map(function (v) {
        if (v.isDir && v.name !== ".git") {
          str = str.concat(v.name, "\n");
        }
        return v.name;
      });
    str = str.concat("```");
    fs.writeFile("README.md", str, function (err) {});
  });
});
