const fetch = require("node-fetch");

const API_ENDPOINT = "https://www.google.com/recaptcha/api/siteverify";

module.exports.handler = (event, context, callback) => {
  const input = JSON.parse(event.body);
  const secret = process.env["recaptcha_key"];
  return fetch(API_ENDPOINT, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: `secret=${secret}&response=${input.response}`,
    headers: { "Content-type": "application/x-www-form-urlencoded" }
  })
    .then(response => response.json())
    .then(resp => {
      return callback(null, {
        statusCode: resp.success ? 200 : 500,
        body: JSON.stringify(resp)
      });
    })
    .catch(e => {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(e)
      });
    }); // parses JSON response into native Javascript objects
};
