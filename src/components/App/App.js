import React from 'react';
import { Component } from 'react';
import './App.scss';
import AppTitle from '../AppTitle/AppTitle';
import BootstrapCSSOnly from 'bootstrap-css-only';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: editorSample };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return <AppTitle />;
  }
}

export default App;
