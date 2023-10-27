/**
 * function to send whatsapp messages using twilio API service
 * 
 */
function send_Whatsapp() {
    const accountSid = 'YOUR_ACCOUNT_SID';
    const authToken = 'YOUR_AUTH_TOKEN';
    const client = require('twilio')(accountSid, authToken);


    client.messages
        .create({
            from: 'whatsapp:TWILIO_WHATSAPP_NUMBER',   // your twilio whatsapp number
            body: 'Hello there! am twilio just testing whatsapp functionality cheers',
            to: 'whatsapp:YOUR_WHATSAPP_NUMBER'
        })
        .then(message => console.log(message.sid));
}

send_Whatsapp()





