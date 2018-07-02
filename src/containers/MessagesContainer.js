import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMessagesAction,
  removeMessagesAction,
  addMessagesAction,
  enableMessagesAction
} from "../actions";
import Messages from "../components/Messages";
import Form from "../components/Form";

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
    this.props.removeMessages(id);
  }

  enable(id) {
    this.props.enableMessages(id);
  }
  add(text) {
    this.props.addMessages(text);
  }

  render() {
    return (
      <div>
        <Messages
          remove={this.remove}
          charger={this.charger}
          messages={this.props.messages}
          enable={this.enable}
        />
        <Form addMessage={this.add} />
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
  removeMessages: id => dispatch(removeMessagesAction(id)),
  enableMessages: id => dispatch(enableMessagesAction(id)),
  addMessages: text => dispatch(addMessagesAction(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContainers);
