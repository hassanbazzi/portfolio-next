module.exports.handler = (event, context,callback) => {
  let payload = JSON.parse(event.body);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(payload)
  });
};
