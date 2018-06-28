import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessagesAction } from "../actions";
import Messages from "../components/Messages";

class MessagesContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Messages messages={this.props.messages} />;
  }
}

// 1. charger depuis le Store de Redux des données en proriétés
const mapStateToProps = state => ({
  messages: state.MessagesReducer.messages
});

// 2. charger les actions de redux en proriétés
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContainers);
