var react = require('react/addons');
var ClassNameMixin = require('class-name-mixin').ClassNameMixin;

var Panel = React.createClass({
  mixins: [ClassNameMixin],

  render: function() {
    return (
      <section className={this.getClassName()}>
        {this.props.children}
      </section>
    );
  },

  getComponentClassName: function() {
    return 'panel';
  }
});

module.exports = Panel;
