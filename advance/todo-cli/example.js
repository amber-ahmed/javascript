//Await is used to Resolve a Promise

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

// timer(1000).then((res) => {
//     console.log("HELLO WORLD");
// }).catch((err) => {
//     console.log(err);
// })

async function main() {
    try {
        console.log("Hi World");
        let res = await timer(1000);
        console.log(res);
        console.log("Hello World");
        timer().then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.error(error);
    }
}
main();