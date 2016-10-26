import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const HomePage = props => (
  <div>
    <header class="phodome">Phodome</header>
    <a onClick={props.toggleDemo}>My Photos</a>
  </div>
);

export default HomePage