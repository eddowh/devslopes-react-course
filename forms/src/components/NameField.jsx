/**
 * The name field.
 */

var React = require('react');

var NameField = React.createClass({

    getInitialState: function() {
        return {
            value: ""
        };
    },

    clear: function() {
        this.setState({
            value: ""
        });
    },

    onChange: function(e) {
        this.setState({
            value: e.target.value
        });
    },

    render: function() {
        return (
            <input
             className="form-control"
             placeholder={this.props.type + " Name"}
             onChange={this.onChange} value={this.state.value} />
        );
    }

});

module.exports = NameField;
