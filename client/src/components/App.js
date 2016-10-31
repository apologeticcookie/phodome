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
    return this.state.showHomePage ?
    (<HomePage toggleDemo={this.toggleDemo}/>) :
    (<Container toggleDemo={this.toggleDemo}/>);
  }
}

export default App;
