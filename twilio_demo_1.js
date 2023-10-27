// const accountSid = 'ACda659326823f452068d1b8c9114c4116';
// const authToken = '635865545ce82838996c66210f9724ce';
// // const client = require('twilio')(accountSid, authToken);

// // client.messages
// //     .create({
// //         to: '+254753761880'
// //     })
// //     .then(message => console.log(message.sid))
// //     .done();

// // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//         from: '+18588599038',
//         to: '+254753761880'
//     })
//     .then(message => console.log(message.sid));



///////////// APPSCRIPT
function send_SMS() {
    const accountSid = 'ACda659326823f452068d1b8c9114c4116';
    const authToken = '635865545ce82838996c66210f9724ce';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+18588599038',
            to: '+254753761880'
        })
        .then(message => console.log(message.sid));
}

send_SMS()
