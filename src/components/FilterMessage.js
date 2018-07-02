import React, { Component } from "react";

class FilterMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <input
          onChange={e => this.props.search(e.target.value)}
          type="search"
        />
      </form>
    );
  }
}

export default FilterMessage;
