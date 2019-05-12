import fetch from "node-fetch";

const API_ENDPOINT = "https://icanhazdadjoke.com/";

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: {
      event,
      context
    }
  }
  // return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
  //   .then(response => response.json())
  //   .then(data => ())
  //   .catch(error => ({ statusCode: 422, body: String(error) }));
};