function send_SMS() {
    const accountSid = 'YOUR_ACCOUNT_SID';
    const authToken = 'YOUR_AUTH_TOKEN';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: 'TWILIO_NUMBER',
            to: 'YOUR_PHONE_NUMBER'
        })
        .then(message => console.log(message.sid));
}

send_SMS()



