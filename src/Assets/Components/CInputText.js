import { Form, Input } from 'antd';

import React from 'react';

export const InputText = (props) => {
  const {
    input,
    meta: { touched, error },
    label,
    placeholder,
  } = props;

  // console.log('props input text', props);
  // console.log('value', initialValue);

  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      label={label}
    >
      <Input placeholder={placeholder} {...input} />
    </Form.Item>
  );
};
