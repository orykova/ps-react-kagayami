import React, { Component } from "react";
import TextInput from "ps-react/TextInput";

/** Optional TextBox with placeholder */
export default class ExamplePlaceholder extends Component {
  render() {
    return (
      <TextInput
        htmlId="example-placeholder"
        label="First Name"
        name="firstname"
        placeholder="(optional first name)"
        onChange={() => {}}
      />
    );
  }
}
