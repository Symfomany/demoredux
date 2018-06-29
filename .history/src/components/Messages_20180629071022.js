import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.messages.length > 0 ? (
          this.props.messages.map(message => <p>{message.content}</p>)
        ) : (
          <div>
            <p style={{ color: "red" }}>Aucun Message</p>
            <button onClick={this.props.charger}>Charger les messages</button>
          </div>
        )}
      </div>
    );
  }
}

export default Messages;
