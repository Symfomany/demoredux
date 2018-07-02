import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMessagesAction,
  removeAction,
  addAction,
  enableAction
} from "../actions";
import Messages from "../components/Messages";
import AddMessage from "../components/AddMessage";

class MessagesContainers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.charger = this.charger.bind(this);
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.enable = this.enable.bind(this);
  }
  charger() {
    this.props.getMessages();
  }
  remove(id) {
    this.props.removeMessage(id);
  }
  add(message) {
    this.props.addMessage(message);
  }
  enable(id) {
    this.props.enableMessage(id);
  }

  render() {
    return (
      <div>
        <Messages
          enable={this.enable}
          remove={this.remove}
          charger={this.charger}
          messages={this.props.messages}
        />
        <AddMessage add={this.add} />
      </div>
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
  removeMessage: id => dispatch(removeAction(id)),
  enableMessage: id => dispatch(enableAction(id)),
  addMessage: text => dispatch(addAction(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContainers);
