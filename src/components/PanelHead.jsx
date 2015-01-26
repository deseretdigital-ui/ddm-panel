var react = require('react/addons');
var ClassNameMixin = require('class-name-mixin').ClassNameMixin;

var PanelHead = React.createClass({
  mixins: [ClassNameMixin],

  render: function() {
    return (
      <header className={this.getClassName()}>
        {this.props.children}
      </header>
    );
  },

  getComponentClassName: function() {
    return 'panel__head';
  }
});

module.exports = PanelHead;
