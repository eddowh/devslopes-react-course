/**
 * This is the entry point file for our application. This is the file you will use to construct your
 * HTML. You will use your pre-created Components and then locate the HTML elements that you created
 * in your `index.html` and render the Component
 */

var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx')

ReactDOM.render(<ListManager title="Ingredients" headingColor="#DC143C" />, document.getElementById('ingredients'))
ReactDOM.render(<ListManager title="ToDo" headingColor="#337ab7" />, document.getElementById('todo'))
ReactDOM.render(<ListManager title="Christmas" headingColor="#2E8B57" />, document.getElementById('christmas'))
