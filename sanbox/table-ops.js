const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const dynamodb = new AWS.DynamoDB();


/* This example lists all of the tables
     associated with the current AWS 
     account and endpoint.
*/
// dynamodb.listTables({}, (err, data ) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });



/* This example describes the table. */
// dynamodb.describeTable({ TableName: 'td_notes_sdk' }, (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(JSON.stringify(data, null, 2));           // successful response
// });

const paramsCreateTable = {
    TableName: 'td_notes_sdk',
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName: "timestamp",
            AttributeType: "N"
        }
    ], 
    KeySchema: [
        {
          AttributeName: "user_id",
          KeyType: "HASH"
        },
        {
          AttributeName: "timestamp",
          KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};

dynamodb.createTable(paramsCreateTable , (err, data) => {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(JSON.stringify(data, null, 2));           // successful response
});


// const paramsUpdateTable = {
//     TableName: 'td_notes_sdk',
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 2,
//         WriteCapacityUnits: 1
//     }
// };

// dynamodb.updateTable(paramsUpdateTable , (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(JSON.stringify(data, null, 2));
// });


// const paramsDeleteTable = {
//     TableName: 'td_notes_sdk'
// };

// dynamodb.deleteTable(paramsDeleteTable , (err, data) => {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(JSON.stringify(data, null, 2));
// });

