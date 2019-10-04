import React, { Component } from "react";
import TextInputCSSModules from "ps-react/TextInputCSSModules";

/** Required TextBox with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputCSSModules
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
