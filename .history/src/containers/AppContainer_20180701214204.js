import React, { Component } from "react";
import { connect } from "react-redux";
import MessagesContainer from "./MessagesContainer";

class AppContainers extends Component {
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

export default AppContainers;
