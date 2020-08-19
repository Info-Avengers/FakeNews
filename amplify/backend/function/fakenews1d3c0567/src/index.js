const AWS = require("aws-sdk");
const awsServerlessExpress = require("aws-serverless-express");
const app = require("./app");

const sns = new AWS.SNS();
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  var params = {
    Message: `A fake email report has been submitted:\n
      ${JSON.stringify(event.body)}` /* required */,
    TopicArn: "arn:aws:sns:us-east-1:144504656881:FakeNewsEmails",
  };
  sns.publish(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
  return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};
