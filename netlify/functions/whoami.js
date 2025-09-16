// netlify/functions/whoami.js
exports.handler = async function(event, context) {
  const ip = event.headers["x-forwarded-for"] || "unknown";

  console.log("Visitor IP:", ip);

  return {
    statusCode: 200,
    body: JSON.stringify({ ip: ip })
  };
};
