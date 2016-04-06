/**
 * HTTP Service. Vanilla JS!
 */

var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6069';

var service = {

    get: function(url) {
        console.log("Making request");
        res = fetch(baseUrl + url)
            .then(function(response) {
                console.log("RES: ", response);
                return response.json();
            });
        return res;
    }

};

module.exports = service;
