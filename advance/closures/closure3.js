function y(){
    for(let i = 1; i <=5; i++){
        setTimeout(() => console.log(i),
        i * 1000)
    }
}
y()