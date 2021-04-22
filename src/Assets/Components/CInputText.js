import { Form, Input, Select } from 'antd';

import React from 'react';

const { Option } = Select;

export const InputText = (props) => {
  const {
    input,
    meta: { touched, error },
    label,
    placeholder,
    needAddOn,
  } = props;

  // console.log('props input text', props);
  // console.log('value', initialValue);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle initialValue="62">
      <Select
        style={{
          width: 70,
        }}
        // defaultValue="62"
      >
        <Option value="62">+62</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form.Item
      validateStatus={touched && error !== undefined ? 'error' : ''}
      help={touched && error !== undefined ? error : ''}
      label={label}
    >
      {needAddOn ? (
        <Input
          placeholder={placeholder}
          addonBefore={prefixSelector}
          {...input}
        />
      ) : (
        <Input placeholder={placeholder} {...input} />
      )}
    </Form.Item>
  );
};
