var react = require('react');
var combineClassName = require('../utils/combineClassName');

var Panel = React.createClass({

  render: function() {
    return (
      <section className={combineClassName.bind(this)()}>
        {this.props.children}
      </section>
    );
  },

  getComponentClassName: function() {
    return 'panel';
  }
});

module.exports = Panel;
