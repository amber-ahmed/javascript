console.log('Hi');
for (var i = 0; i <= 5; i++) {
    console.log(i);
    setTimeout(() => {
        console.log(i);
    }, 5000);
}
console.log('Bye');
console.log(i);