import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessagesAction, removeAction } from "../actions";
import Messages from "../components/Messages";

class MessagesContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.charger = this.charger.bind(this);
  }
  charger() {
    this.props.getMessages();
  }
  remove(id) {
    // this.props.remove(id);
  }

  render() {
    return (
      <Messages
        remove={this.remove}
        charger={this.charger}
        messages={this.props.messages}
      />
    );
  }
}

// 1. charger depuis le Store de Redux des données en proriétés
const mapStateToProps = state => ({
  messages: state.MessagesReducer.messages
});

// 2. charger les actions de redux en proriétés
const mapDispatchToProps = dispatch => ({
  getMessages: () => dispatch(getMessagesAction()),
  removeMessage: id => dispatch(removeAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContainers);
