import React, { Component } from "react";
import TextInput from "ps-react/TextInput";

/** Required TextBox with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInput
        htmlId="example-required"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required"
      />
    );
  }
}
