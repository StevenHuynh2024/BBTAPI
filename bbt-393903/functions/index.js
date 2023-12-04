const functions = require('firebase-functions');
const server = require('./server');
const bbt393903 = functions.runWith({ memory: "2GB", timeoutSeconds: 60 })
                     .https
                     .onRequest(server);

module.exports = { bbt393903 };
