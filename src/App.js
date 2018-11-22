import React, { Component } from 'react';
import * as monaco from 'monaco-editor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.container = null;
    this.editor = null;
  }

  componentDidMount() {
    this.editor = monaco.editor.create(this.container);
  }

  componentWillUnmount() {
    this.editor.dispose();
  }

  render() {
    return (
      <div className="App">
        <div ref={container => { this.container = container }} style={{width:500, height: 500}}/>
      </div>
    );
  }
}

export default App;
