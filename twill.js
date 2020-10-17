const accountSid = 'ACfb8392f8b17bf3def52ce53d4c7672fa';
const authToken = 'da9a894fadc00ea7e6934f84654680da';

const client = require('twilio')(accountSid, authToken);
console.log("hello");
client.messages
    .create({
        body: 'McAvoy or Stewart? These timelines can get so confusing.',
        from: '+12548707460',
        to: '+916289533647'
    })
    .then(message => {
        console.log("sup");
        console.log(message.sid);
    });