/***************************  IMPORTS  **************************************/

// npm modules
var React = require('react');
var Reflux = require('reflux');

// reflux elemens
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

// react components
var ListItem = require('./ListItem.jsx')

/***************************************************************************/

var List = React.createClass({

    mixins: [Reflux.listenTo(IngredientStore, 'onChange')],

    getInitialState: function() {
        return {
            ingredients: [],
            newText: ""
        };
    },

    componentWillMount: function() {
        Actions.getIngredients();
    },

    onChange: function(event, ingredients) {
        this.setState({
            ingredients: ingredients
        });
    },

    onInputChange: function(e) {
        this.setState({
            newText: e.target.value
        });
    },

    onClick: function(e) {
        // make sure that it is not null
        if (this.state.newText) {
            Actions.postIngredient(this.state.newText);
        }
        this.setState({
            newText: ""
        });
    },

    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });
        return (
            <div>
                <input
                 placeholder="Add Item"
                 value={this.state.newText}
                 onChange={this.onInputChange} />
                <button onClick={this.onClick}>
                    Add Item
                </button>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }

});

module.exports = List;
