// POST Request
var rp = require('request-promise');

var options = {
  method: 'POST',
  uri: 'http://localhost:9001/user/login',
  body: {
      loginId: 'techbot',
      password: 'techbot2020'
  },
  json: true // Automatically stringifies the body to JSON
};

rp(options)
  .then(function (data) {
      // POST succeeded...
      console.log('DATA POST: ', data);

  })
  .catch(function (err) {
      // POST failed...
      console.log(err);
  });

  // GET Request
  var op = {
    uri: 'http://localhost:9001/product/category',
    json: true // Automatically parses the JSON string in the response
};

rp(op)
    .then(function (data) {
        console.log('DATA GET', data);
    })
    .catch(function (err) {
        // API call failed...
        console.log(err);

    });

