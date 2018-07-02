import React, { Component } from "react";

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={() => this.props.add("coucou")}>
        <textarea class="form-control" />
        <button>Envoyer ce commentaire</button>
      </form>
    );
  }
}

export default AddMessage;
