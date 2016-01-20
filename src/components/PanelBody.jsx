var react = require('react');
var combineClassName = require('../utils/combineClassName');

var PanelBody = React.createClass({

  render: function() {
    return (
      <div className={combineClassName.bind(this)()}>
        {this.props.children}
      </div>
    );
  },

  getComponentClassName: function() {
    return 'panel__body';
  }
});

module.exports = PanelBody;
