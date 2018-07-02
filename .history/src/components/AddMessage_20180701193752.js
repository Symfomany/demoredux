import React, { Component } from "react";

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <textarea class="form-control" />
        <button>Envoiyer ce commentaire</button>
      </form>
    );
  }
}

export default AddMessage;
