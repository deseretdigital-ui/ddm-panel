"use strict";

ReactDOM.render(React.createElement(
  ResponsivePanel,
  null,
  React.createElement(
    PanelHead,
    null,
    React.createElement(
      "h2",
      { className: "header header--h2" },
      "DDM Responsive Panel"
    )
  ),
  React.createElement(
    PanelBody,
    null,
    React.createElement(
      "p",
      null,
      "This is our responsive panel"
    )
  )
), document.getElementById('ddmResponsivePanelExample'));

ReactDOM.render(React.createElement(
  Panel,
  null,
  React.createElement(
    PanelHead,
    null,
    React.createElement(
      "h2",
      { className: "header header--h2" },
      "DDM Normal Panel"
    )
  ),
  React.createElement(
    PanelBody,
    null,
    React.createElement(
      "p",
      null,
      "This is our normal panel"
    )
  )
), document.getElementById('ddmPanelExample'));