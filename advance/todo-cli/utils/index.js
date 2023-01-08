import fs from "fs";

function timer(time) {
    return new Promise((resolve, reject) => {
        if (time < 0 || !time) {//if time less than 0 or time is empty string
            reject("Milliseconds are Required ")
        }
        setTimeout(() => {
            resolve("THis is coming from Promise");
        }, time);
    })
}

function randomStringGenerator(size) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = ' ';
    for (let i = 0; i < size; i++) {
        result += characters[(Math.floor(Math.random() * charactersLength))];
    }
    return result;
}


function writeFile(fileName, fileData) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, fileData, (err) => {
            if (err) reject(err);
            else resolve();
        })
    })
}


function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        })
    })
}

export { timer, randomStringGenerator, writeFile, readFile }