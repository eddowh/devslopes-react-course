/**
 * HTTP Service. Vanilla JS!
 */

var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6069';

var service = {

    get: function(url) {
        // console.log("Making request");
        res = fetch(baseUrl + url)
            .then(function(response) {
                // console.log("RES: ", response);
                return response.json();
            });
        return res;
    },

    post: function(url, ingredient) {
        res = fetch(baseUrl + url, {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(ingredient)
        }).then(function(response) {
            return response;
        });
        return res;
    }

};

module.exports = service;
