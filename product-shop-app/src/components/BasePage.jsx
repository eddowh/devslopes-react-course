/**
 * Base Page
 */

var React = require('react');
var NavBar = require('./nav/NavBar.jsx');

var navLinks = [{
    title: "Home",
    href: "/"
}, {
    title: "iOS Course",
    href: "/product/55"
}, {
    title: "React Course",
    href: "/product/67"
}];

var BasePage = React.createClass({

    render: function() {
        return (
            <div>
                <NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks} />
                {this.props.children}
            </div>
        );
    }

});

module.exports = BasePage;
