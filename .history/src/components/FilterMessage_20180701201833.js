import React, { Component } from "react";

class FilterMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <input type="search" />
      </form>
    );
  }
}

export default FilterMessage;
