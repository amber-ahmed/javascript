const arr = [10, 20, 30, 40]

for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(arr[i - 1]);
    }, 4000);
}

console.log(i);