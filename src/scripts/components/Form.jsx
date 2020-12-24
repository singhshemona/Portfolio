import React from 'react';
import ConvertKitForm from 'convertkit-react';

const formId = 1612631;

export default function Form() {
  return (
    <ConvertKitForm
      formId={formId}
      template="clare"
      namePlaceholder="Name"
      emailPlaceholder="Email address"
      submitText="Subscribe to Posts"
      newTab
    />
  );
}
