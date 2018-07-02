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
          this.props.messages.map(message => (
            <p
              style={{ color: message.enabled ? "gold" : "black" }}
              key={message.id}
            >
              {message.content}
              <button onClick={e => this.props.remove(message.id)}>
                Supprimer
              </button>
            </p>
          ))
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
