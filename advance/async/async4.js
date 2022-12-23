console.log('1');

setTimeout(() => {
    console.log("I am First");
}, 0);

console.log('11');

setTimeout(() => {
    console.log("I am Second");
}, 0);

console.log('111');

setTimeout(() => {
    console.log("I am Third");
}, 0);

setTimeout(() => {
    console.log("I am Just Getting Started with Adv. JS");
    setTimeout(() => {
        console.log("I am Just Getting Started again");
    }, 5000);
}, 2000);