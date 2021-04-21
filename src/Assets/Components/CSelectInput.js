import React from 'react';
import { Form, Select } from 'antd';

export const SelectInput = ({ suppliers }) => {
  return (
    <Form.Item label='Select Supplier' name='supplierId'>
      <Select placeholder='Select Supplier'>
        {suppliers &&
          suppliers.map((inv) => (
            <Select.Option key={inv.id} value={inv.id}>
              {inv.name}
            </Select.Option>
          ))}
      </Select>
    </Form.Item>
  );
};
