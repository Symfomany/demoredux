import React, { Component } from "react";
import { connect } from "react-redux";
import MessagesContainer from "./MessagesContainer";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MessagesContainer />
      </div>
    );
  }
}

export default AppContainer;
