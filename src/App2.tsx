import React from 'react';
import Form from '@rjsf/core';
import { withTheme } from '@rjsf/core';
import { Theme as MaterialUITheme } from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';

const schema = {
  title: "User Registration",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name"
    },
    email: {
      type: "string",
      format: "email",
      title: "Email"
    },
    password: {
      type: "string",
      title: "Password"
    }
  },
  required: ["name", "email", "password"]
};

function App2() {
  const handleSubmit = ({ formData }) => {
    console.log("Data submitted: ", formData);
  };

  const ThemedForm = withTheme(MaterialUITheme);

  return (
    <div className="App">
      <h1>User Registration</h1>
      <ThemedForm schema={schema} onSubmit={handleSubmit} validator={validator} />
    </div>
  );
}

export default App2;
