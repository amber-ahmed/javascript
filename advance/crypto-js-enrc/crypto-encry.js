import cryptoJs from "crypto-js";
//encrypt
let text = 'this text to be encrypted'
let key = 'dev321'
let encryptedText = cryptoJs.AES.encrypt(text,key).toString()
console.log('encrypted text  : ' +  encryptedText)
//decrypt
let bytes = cryptoJs.AES.decrypt(encryptedText,key)
let decryptedText = bytes.toString(cryptoJs.enc.Utf8)
console.log('decrypted text  : ' + decryptedText)