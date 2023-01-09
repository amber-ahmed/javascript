function randomStringGenerator(size) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = ' ';
    for (let i = 0; i < size; i++) {
        result += characters[(Math.floor(Math.random() * charactersLength))];
    }
    return result;
}

export {randomStringGenerator};