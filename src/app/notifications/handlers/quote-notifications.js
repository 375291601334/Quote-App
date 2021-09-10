const AWS = require('aws-sdk');

const handler = async (event) => {
  if (event.body !== null && event.body !== undefined) {
    const body = JSON.parse(event.body);

    if (!body.quote) {
      return errorResponse('No quote was provided!');
    }

    if (body.email) {
      const ses = new AWS.SES();
      const params = {
        Destination: { ToAddresses: [body.email] },
        Message: {
          Body: {
            Html: {
              Charset: 'UTF-8',
              Data: `<p>${body.quote.author}: <q>${body.quote.text}</q></p>`,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: 'Quote from Quote App',
          },
        },
        Source: '375291601334@mail.ru',
      };
      const response = await ses.sendEmail(params).promise();
      return sucessResponse(response);
    }

    if (body.phone) {
      const sns = new AWS.SNS();
      const params = {
        PhoneNumber: body.phone,
        Message: `${body.quote.author}: ${body.quote.text}`
      };
      const response = await sns.publish(params).promise();
      return sucessResponse(response);
    }

    return errorResponse('No email or phone were provided!');
  }
  return errorResponse('No request body was provided!');
};

function sucessResponse(message) {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify({ status: "success", data: message }),
  };
  return response;
}

function errorResponse(message) {
  const response = {
    statusCode: 404,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: message,
  };
  return response;
}

module.exports = handler;
