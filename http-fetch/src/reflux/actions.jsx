/**
 * Define actions to interact with components and data stores
 */

var Reflux = require('reflux');

// even when the list contains string types
// reflux will parse it as a function
var Actions = Reflux.createActions([
    'getIngredients',
    'postIngredient'
]);

module.exports = Actions;
