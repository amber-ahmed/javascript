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

export default timer