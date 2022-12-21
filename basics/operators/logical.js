//LOGICAL OPERATORS MAY RETURN VALUES OTHER THAN TRUE AND FALSE
//LOGICAL OPERATORS COMPARE TRUTHY AND FALSY VALUES
console.log(10 >  5 && 100 < 120 && 5 > 6);// => (true && true && false)
console.log( true && true && true)// same as above
console.log(10 >  5 || 100 < 120 || 7 > 6);// => (true || true || true)

console.log(100 && 40 && 30);// => (truthy && truthy && truthy)

console.log(100 && 0 && 30);// => (truthy && falsy && truthy)
console.log(100 && 30 && 'a');// => => (truthy && truthy && truthy)
console.log(100 && "" && 30);// => (truthy && falsy && truthy)
console.log(100 && undefined && 30);// => (truthy && falsy && truthy)
console.log(100 && null && 30);

console.log("" && 0 && undefined && null && NaN && "hello");

console.log("logical OR");
console.log(100 || 40 || 30);
console.log(100 || 0 || 30);
console.log(100 || "" || 30);
console.log(100 || undefined || 30);
console.log(100 || null || 30);
console.log("" || 0 || undefined || null || NaN || "hello");
console.log("" || 0 || undefined || null || NaN );