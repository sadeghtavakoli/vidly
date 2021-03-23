import React, { Component } from "react";
import Input from "./input";

class SearchBox extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Input
        type={"search"}
        name={"query"}
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
    );
  }
}

export default SearchBox;
