import React, { Component } from "react";

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  add(e){
    e.preventDefault();
    this.props.add("coucou")
  }
  render() {
    return (
      <form onSubmit={() => }>
        <textarea class="form-control" />
        <button>Envoyer ce commentaire</button>
      </form>
    );
  }
}

export default AddMessage;
