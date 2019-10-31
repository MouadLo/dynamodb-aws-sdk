const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put({
//     TableName: 'td_notes_sdk',
//     Item: {
//         user_id: '5dfg1dfg',
//         timestamp: 2,
//         title: 'DocumentClient',
//         content: 'Create a new item, or replaces an old with a new item by delegating AWS.DynamoDB.DocumentClient.put()'
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// docClient.update({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: '5dfg1dfg',
//         timestamp: 2
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t': 'Updated title'
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// docClient.delete({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: '5dfg1dfg',
//         timestamp: 2
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });


docClient.batchWrite({
    RequestItems: {
        'td_notes_sdk': [{
                PutRequest: {
                    Item: {
                        user_id: '5dfg1dfghjkj',
                        timestamp: 8,
                        title: 'Title 83',
                        content: 'Content 38'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '5dfg1dfg',
                        timestamp: 5,
                        title: 'Title 33',
                        content: 'Content 33'
                    }
                }
            }, {
                PutRequest: {
                    Item: {
                        user_id: '5dfg1dfg',
                        timestamp: 2,
                        title: 'Title 44',
                        content: 'Content 44'
                    }
                }
            }
        ]
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});