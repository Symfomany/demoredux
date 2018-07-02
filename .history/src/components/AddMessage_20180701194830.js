import React, { Component } from "react";

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.add = this.add.bind(this);
  }

  add(e) {
    e.preventDefault();
    this.props.add("coucou");
  }
  render() {
    return (
      <form onSubmit={this.add}>
        <textarea className="form-control" />
        <button>Envoyer ce commentaire</button>
      </form>
    );
  }
}

export default AddMessage;
