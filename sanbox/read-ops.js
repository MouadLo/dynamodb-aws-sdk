const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get({
//     TableName: 'td_notes',
//     Key: {
//         user_id: 'sdfsdfsghjghjdf',
//         timestamp: 1572305225
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// docClient.query({
//     TableName: 'td_notes',
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues: {
//         ':uid': 'sdfsdfsghjghjdf'
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });


// docClient.scan({
//     TableName: 'td_notes',
//     FilterExpression: 'cat = :cat',
//     ExpressionAttributeValues: {
//         ':cat': 'aws'
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

docClient.batchGet({
    RequestItems: {
        'td_notes': {
            Keys: [{
                    user_id: 'sdfsdfsghjghjdf',
                    timestamp: 1572305225
                },
                {
                    user_id: 'sdfsdfsdf',
                    timestamp: 1572305228
                }
            ]
        },
        'td_notes_sdk': {
            Keys: [{
                    user_id: '5dfg1dfghjkj',
                    timestamp: 8
                },
                {
                    user_id: 'ABC',
                    timestamp: 1
                }
            ]
        }
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});