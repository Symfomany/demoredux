import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>{this.props.messages.map(message => <p>{message.content}</p>)}</div>
    );
  }
}

export default Messages;
