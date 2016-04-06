/**
 * The e-mail field that requires an input.
 *
 * Needs to validate the e-mail address with every keystroke.
 * On a similar note, change the styling if field is valid/invalid.
 */

var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({

    getInitialState: function() {
        return {
            valid: false,
            value: ""
        };
    },

    onChange: function(e) {
        if (!validator.validate(e.target.value)) {
            this.setState({
                valid: false,
                value: e.target.value
            });
        } else {
            this.setState({
                valid: true,
                value: e.target.value
            });
        }
    },

    clear: function() {
        this.setState({
            valid: false,
            value: ""
        });
    },

    render: function() {
        var formClass = this.state.valid ? "form-group" : "form-group has-error"
        return (
            <div className={formClass}>
                <input placeholder="Email" className="form-control"
                       onChange={this.onChange} value={this.state.value} />
            </div>
        );
    }

});

module.exports = EmailField;
