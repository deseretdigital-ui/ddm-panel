var react = require('react/addons');
var ClassNameMixin = require('class-name-mixin').ClassNameMixin;

var PanelBody = React.createClass({
  mixins: [ClassNameMixin],

  render: function() {
    return (
      <div className={this.getClassName()}>
        {this.props.children}
      </div>
    );
  },

  getComponentClassName: function() {
    return 'panel__body';
  }
});

module.exports = PanelBody;
