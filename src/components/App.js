import React, { Component } from "react";
import MessagesContainer from "../containers/MessagesContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MessagesContainer />
      </div>
    );
  }
}

export default App;
