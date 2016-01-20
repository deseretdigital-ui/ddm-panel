ReactDOM.render(
  <ResponsivePanel>
    <PanelHead>
      <h2 className="header header--h2">DDM Responsive Panel</h2>
    </PanelHead>
    <PanelBody>
      <p>This is our responsive panel</p>
    </PanelBody>
  </ResponsivePanel>,
  document.getElementById('ddmResponsivePanelExample')
);

ReactDOM.render(
  <Panel>
    <PanelHead>
      <h2 className="header header--h2">DDM Normal Panel</h2>
    </PanelHead>
    <PanelBody>
      <p>This is our normal panel</p>
    </PanelBody>
  </Panel>,
  document.getElementById('ddmPanelExample')
);