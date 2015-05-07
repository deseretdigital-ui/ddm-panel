var react = require('react/addons');

var ClassNameMixin = require('class-name-mixin').ClassNameMixin;
var mediaMatch = require('media-match/media.match.js');

var Panel = require('./Panel');
var {Collapsible, CollapsibleHead, CollapsibleBody} = require('ddm-collapsible');

var ResponsivePanel = React.createClass({
  mixins: [ClassNameMixin],
  mediaQuery: null,

  getDefaultProps: function() {
    return {
      convertQuery: '(max-width: 480px)'
    }
  },

  getInitialState: function() {
    return {
      renderAsCollapsbile: false
    };
  },

  componentWillMount: function() {
    this.addMediaMatch();
  },

  componentWillUnmount: function() {
    this.mediaQuery.removeListener(this.observeMediaQuery);
  },

  addMediaMatch: function() {
    var query = this.props.convertQuery;
    if (!query.match(/\(|\)/)) {
      query = '(' + this.props.convertQuery + ')';
    }

    this.mediaQuery = window.matchMedia(query);
    this.mediaQuery.addListener(this.observeMediaQuery);

    this.observeMediaQuery();
  },

  observeMediaQuery: function() {
    this.setState({renderAsCollapsbile: this.mediaQuery.matches});
  },

  render: function() {
    if (this.state.renderAsCollapsbile) {
      return this.renderAsCollapsible();
    } else {
      return this.renderAsPanel();
    }
  },

  renderAsPanel: function() {
    return (
      <Panel className={this.getClassName()}>
        {this.props.children}
      </Panel>
    );
  },

  renderAsCollapsible: function() {
    collapsibleHead = this.getCollapsibleHead();
    collapsibleBody = this.getCollapsibleBody();

    return (
      <Collapsible className={this.getClassName()}>
        {collapsibleHead}
        {collapsibleBody}
      </Collapsible>
    );
  },

  getCollapsibleHead: function() {
    var collapsibleHead;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type == PanelHead.type) {
        collapsibleHead = (
          <CollapsibleHead {...child.props}>{child.props.children}</CollapsibleHead>
        );
      }
    });

    return collapsibleHead;
  },

  getCollapsibleBody: function() {
    var collapsibleBody;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type == PanelBody.type) {
        collapsibleBody = (
          <CollapsibleBody {...child.props}>{child.props.children}</CollapsibleBody>
        );
      }
    });

    return collapsibleBody;
  }
});

module.exports = ResponsivePanel;
