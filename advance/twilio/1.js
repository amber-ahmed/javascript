import twilio from 'twilio';



function sendSMS(obj){
let body = obj.message
let to = obj.phone
const accountSid = 'AC228f4d7ae385c110e4367f019d64a175';
const authToken = 'c82f5b226c9682b343613ac131777181';
const client = twilio(accountSid, authToken);
client.messages
  .create({
     body,
     from: '+16516611544',
     to
   })
  .then(message => console.log(message.sid));

}


const obj = {message : "Hi, its Amber",phone : "+918712128572"}
sendSMS(obj)