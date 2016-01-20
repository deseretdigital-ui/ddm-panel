var react = require('react');

var combineClassName = require('../utils/combineClassName');
var mediaMatch = require('media-match/media.match.js');

var Panel = require('./Panel');
var PanelHead = require('./PanelHead');
var PanelBody = require('./PanelBody');

var {Collapsible, CollapsibleHead, CollapsibleBody} = require('ddm-collapsible');

var ResponsivePanel = React.createClass({
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
      <Panel className={combineClassName.bind(this)()}>
        {this.props.children}
      </Panel>
    );
  },

  renderAsCollapsible: function() {
    var collapsibleHead = this.getCollapsibleHead();
    var collapsibleBody = this.getCollapsibleBody();

    return (
      <Collapsible className={combineClassName.bind(this)()}>
        {collapsibleHead}
        {collapsibleBody}
      </Collapsible>
    );
  },

  getCollapsibleHead: function() {
    var collapsibleHead;

    React.Children.forEach(this.props.children, function(child) {
      if (child.type == PanelHead) {
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
      if (child.type == PanelBody) {
        collapsibleBody = (
          <CollapsibleBody {...child.props}>{child.props.children}</CollapsibleBody>
        );
      }
    });

    return collapsibleBody;
  }
});

module.exports = ResponsivePanel;
