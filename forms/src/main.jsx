/**
 * This is the entry point file for our application. This is the file you will use to construct your
 * HTML. You will use your pre-created Components and then locate the HTML elements that you created
 * in your `index.html` and render the Component
 */

var React = require('react');
var ReactDOM = require('react-dom');
var LeadCapture = require('./components/LeadCapture.jsx')

ReactDOM.render(<LeadCapture />, document.getElementById('leadCapture'))
ReactDOM.render(<LeadCapture />, document.getElementById('leadCapture1'))
ReactDOM.render(<LeadCapture />, document.getElementById('leadCapture2'))
