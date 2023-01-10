import twilio from 'twilio';



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
   console.log(res.sid)
}


const obj = {message : "Hi, its Amber",phone : "+918499011518"}
sendSMS(obj)