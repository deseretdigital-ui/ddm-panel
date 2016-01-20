var react = require('react');
var combineClassName = require('../utils/combineClassName');

var PanelHead = React.createClass({

  render: function() {
    return (
      <header className={combineClassName.bind(this)()}>
        {this.props.children}
      </header>
    );
  },

  getComponentClassName: function() {
    return 'panel__head';
  }
});

module.exports = PanelHead;
