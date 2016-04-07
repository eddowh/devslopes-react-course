/**
 * Where we are going to put our store
 */

var Reflux = require('reflux');

var Actions = require('./actions.jsx');
var HTTP = require('../services/httpservice');

// create our store
var IngredientStore = Reflux.createStore({

    // reflux keyword
    // listens for specific actions
    listenables: [Actions],

    // using the exact same name as listed in `Actions`
    // otherwise it wouldn't be called

    getIngredients: function() {
        HTTP.get('/ingredients')
            .then(function(json) {
                this.ingredients = json;
                this.fireUpdate();
            }.bind(this)); // this == React component
    },

    postIngredient: function(text) {

        /**
         * posted ingredient to the server
         * now we got a successful callback
         * and make sure our local list is updated
         */

        // error checking
        if (!this.ingredients) {
            this.ingredients = [];
        };

        var ingredient = {
            "text": text,
            "id": Math.floor(Date.now() / 1000) + text
        };

        // push locally
        this.ingredients.push(ingredient);
        this.fireUpdate();

        // post to server
        HTTP.post('/ingredients', ingredient)
            .then(function(response) {
                this.getIngredients();
            }.bind(this));

    },

    // refresh function
    fireUpdate: function() {
        // trigger is a reversed Reflux function which... triggers the change
        this.trigger('change', this.ingredients); // this refers to the store
    },

});

module.exports = IngredientStore;


/* You can module export all at once like below
 * However, it might be preferable to have everything in its own file
 * to make things as "object-oriented" as possible
 *
var TodoStore = Reflux.createStore({

});

module.exports = {
    Ing: IngredientStore,
    Todo: TodoStore
}
*/
