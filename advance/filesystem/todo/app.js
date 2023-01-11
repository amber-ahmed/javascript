import open from "open";
import fs from "fs/promises";
import readlineSync from "readline-sync";
//  const open = require('open');
async function main() {
  try {
    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);
    let task = fileData[0].todos.toString();
    await fs.writeFile("./hello.txt", task);
    console.log("change in editor");
    await open("./hello.txt");
    let save = readlineSync.question("Do you want to save changes y/n : ");

    if (save == "y" || save == "Y" || save == "yes") {
      let changes = await fs.readFile("./hello.txt");

      fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);
      fileData[0].todos = changes.toString()
      await fs.writeFile("data.json", JSON.stringify(fileData));
    }
  } catch (error) {
    console.log(error);
  }
}
main();
