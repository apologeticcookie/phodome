import React from 'react';
import HomePage from './HomePage';
import Container from './Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: true
    };

    this.toggleDemo = this.toggleDemo.bind(this);
  }

  toggleDemo() {
    this.setState({
      showHomePage: !this.state.showHomePage
    });
  }

  render() {
    // If home page should NOT be shown, simply hide the <HomePage> component
    // rather than remove it completely. Because the Plotly visualization on
    // <HomePage> is run through a <script> tag inside index.html, and is
    // therefore done outside the scope of React, we want to maintain the
    // existence of <HomePage> in the DOM; otherwise, we would need to re-trigger
    // the dataViz.js script every time we switched from <Container> to <HomePage>
    // Without this fix, the Plotly dome visualization would be absent when
    // switching from <Container> to <HomePage>
    let style = this.state.showHomePage ?
      {} :
      { display: 'none' };

    return (
      <div>
        <div style={style} className="llama">
          <HomePage toggleDemo={this.toggleDemo}/>
        </div>
        {
          this.state.showHomePage ?
            null :
            <Container toggleDemo={this.toggleDemo}/>
        }
      </div>
    );
  }
}

export default App;
