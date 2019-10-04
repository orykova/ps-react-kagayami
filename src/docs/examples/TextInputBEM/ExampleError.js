import React, { Component } from "react";
import TextInputBEM from "ps-react/TextInputBEM";

/** Required TextBox with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputBEM
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
