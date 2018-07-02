import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.add = this.add.bind(this);
  }

  add(e) {
    e.preventDefault();
    this.props.addMessage(this.inputTextarea.value);
    this.inputTextarea.value = "";
  }
  render() {
    return (
      <form onSubmit={this.add}>
        <textarea ref={input => (this.inputTextarea = input)} />
        <button type="submit">Add a message</button>
      </form>
    );
  }
}

export default Form;
