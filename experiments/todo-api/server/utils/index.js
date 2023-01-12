import twilio from 'twilio';


function randomStringGenerator(size) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = ' ';
    for (let i = 0; i < size; i++) {
        result += characters[(Math.floor(Math.random() * charactersLength))];
    }
    return result;
}




async function sendSMS(obj){
let body = obj.message
let to = obj.phone
const accountSid = 'AC228f4d7ae385c110e4367f019d64a175';
const authToken = 'c82f5b226c9682b343613ac131777181';
const client = twilio(accountSid, authToken);
let res = await  client.messages
try{
  let res = await  client.messages
  .create({
     body,
     from: '+16516611544',
     to
   })
}catch(error){
  console.error(error)
}
//    console.log(res.sid)
}

export {randomStringGenerator,sendSMS};