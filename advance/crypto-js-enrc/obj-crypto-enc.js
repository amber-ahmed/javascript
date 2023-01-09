import cryptoJs from "crypto-js";

let data = [{id: 1}, {id: 2}]

// Encrypt
let ciphertext = cryptoJs.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
console.log('encrypted object : ' + ciphertext)
// Decrypt
let bytes  = cryptoJs.AES.decrypt(ciphertext, 'secret key 123');
let decryptedData = JSON.parse(bytes.toString(cryptoJs.enc.Utf8));

console.log(decryptedData);