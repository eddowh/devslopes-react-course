/**
 * Product Page
 */

var React = require('react');

var ProductPage = React.createClass({

    getInitialState: function() {
        return {
            pid: ""
        };
    },

    componentDidMount: function() {
        this.setState({
            pid: this.props.params.productId
        });
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            pid: nextProps.params.productId
        });
    },

    render: function() {
        return (
            <h1>
                Hi, I am product number {this.state.pid}
            </h1>
        );
    }

});

module.exports = ProductPage;
