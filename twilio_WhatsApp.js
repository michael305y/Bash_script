/**
 * function to send whatsapp messages using twilio API service
 * 
 */
function send_Whatsapp() {
    const accountSid = 'ACda659326823f452068d1b8c9114c4116';
    const authToken = '635865545ce82838996c66210f9724ce';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            from: 'whatsapp:+14155238886',   // your twilio whatsapp number
            body: 'Hello there! am twilio just testing whatsapp functionality cheers',
            to: 'whatsapp:+254753761880'
        })
        .then(message => console.log(message.sid));
}

send_Whatsapp()





