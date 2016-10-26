import React from 'react';
import HomePage from './components/HomePage';
import Container from './components/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      showHomePage: true
    });

    this.toggleDemo = this.toggleDemo.bind(this);
  }

  toggleDemo() {
    this.setState({
      showHomePage: !this.state.showHomePage
    });
  }

  render() {
    this.state.showHomePage ?
    <HomePage toggleDemo={this.toggleDemo}/> :
    <ContainertoggleDemo={this.toggleDemo}/>
  }
}

export default App