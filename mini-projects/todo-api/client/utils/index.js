import fs from "fs";
import twilio from "twilio";
function timer(time) {
    return new Promise((resolve, reject) => {
        if (time < 0 || !time) {
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

async function sendSMS(obj){
    let body = obj.message
    let to = obj.phone
    const accountSid = 'AC228f4d7ae385c110e4367f019d64a175';
    const authToken = 'c82f5b226c9682b343613ac131777181';
    const client = twilio(accountSid, authToken);
    try{
        let res = await  client.messages
        .create({
           body,
           from: '+16516611544',
           to
         })
         console.log(res.sid)

    }catch(error){
        console.error(error)
    }
   

    }
    


export { timer, randomStringGenerator, writeFile, readFile, sendSMS }