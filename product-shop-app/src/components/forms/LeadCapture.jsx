var React = require('react');
var EmailField = require('./EmailField.jsx')
var NameField = require('./NameField.jsx')

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var EmailStore = require('../../reflux/EmailStore.jsx');

var LeadCapture = React.createClass({

    mixins: [Reflux.listenTo(EmailStore, 'onChange')],

    onChange: function(msg) {
        console.log(msg)
        this.setState({
            submitted: true
        });
    },

    getInitialState: function() {
        return {
            submitted: false
        };
    },

    onSubmit: function(e) {
        if (!this.refs.fieldEmail.state.valid) {
            alert("You suck at filling out forms. E-mail is always required in a lead capture form. Dummy!");
        } else {
            // where request is sent to e-mail or server
            var subscriber = {
                email: this.refs.fieldEmail.state.value,
                firstName: this.refs.fieldName.state.value
            };

            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();

            // alert("Congratulations! You are registered.");
            // console.log(httpRequestBody['firstName'] + " ; " + httpRequestBody['email']);

            Actions.submitEmail(subscriber);
        }
    },

    render: function() {

        var successStyle = {
            color: "#2E8B57",
            fontWeight: "bold",
            visibility: this.state.submitted ? "visible" : "hidden"
        }

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>
                            Get Free E-Book
                        </h4>
                    </div>
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName" />
                        <br/>
                        <EmailField ref="fieldEmail" />
                        <div className="row">
                            <div className="col-sm-6">
                                <button className="btn btn-primary" onClick={this.onSubmit}>
                                    Submit
                                </button>
                            </div>
                            <div className="col-sm-2">
                                <h5 style={successStyle}>
                                    SUCCESS
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = LeadCapture;
