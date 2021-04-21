import React from 'react';
import { Button, Form, Modal, Select } from 'antd';
import { Field, reduxForm } from 'redux-form';

import { InputText } from '../../../Assets/Components/CInputText';
// import { SelectInput } from '../../../Assets/Components/CSelectInput';
import validate from '../Validation/InventoryValidation';

const ModalInventoryComponent = (props) => {
  // console.log('Modal inventory Component props', props);

  const {
    // supplierData,
    modalInventoryIsShow,
    handleCancelModal,
    handleOnSubmit,
    inventoryDetail,
    modalAction,
    supplierData,
    invalid,
  } = props;

  // console.log('supplier data', supplierData);

  const SelectInput = (input) => {
    // console.log('input parameter', input);
    return (
      <>
        <Select
          style={{ width: '100%', marginBottom: '40px' }}
          placeholder='Select Supplier'
          onChange={(e) => input.input.onChange(e)}
        >
          {supplierData &&
            supplierData.map((inv) => (
              <Select.Option key={inv.id} value={inv.id}>
                {inv.name}
              </Select.Option>
            ))}
        </Select>
      </>
    );
  };

  return (
    <Modal
      title='Basic Modal'
      visible={modalInventoryIsShow}
      onCancel={handleCancelModal}
      footer={null}
    >
      {modalAction === 'register' && (
        <>
          <Form onFinish={handleOnSubmit} layout='vertical'>
            <Field
              name='name'
              component={InputText}
              label='Name'
              placeholder='Input name here'
            />
            <Field
              name='costPrice'
              component={InputText}
              label='Cost Price'
              placeholder='Input Cost Price here'
            />
            <Field
              name='retailPrice'
              component={InputText}
              label='Retail Price'
              placeholder='Input retail price here'
            />
            <Field
              name='qty'
              component={InputText}
              label='Quantity'
              placeholder='Input Quantity'
            />
            <Field
              name='marginPercentage'
              component={InputText}
              label='Margin Percentage'
              placeholder='Input Margin Percentage here'
            />
            <Field
              name='sku'
              component={InputText}
              label='SKU'
              placeholder='Input SKU'
            />
            <Field
              name='supplierId'
              component={SelectInput}
              label='Supplier'
              placeholder='Input Supplier'
            />
            {/* <Field
          name='supplierId'
          component={SelectInput}
          label='Supplier'
          placeholder='Input Supplier'
        /> */}
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form>
        </>
      )}
      {modalAction === 'update' && (
        <Form onFinish={handleOnSubmit} layout='vertical'>
          <Field
            name='name'
            component={InputText}
            label='Name'
            placeholder={inventoryDetail.name}
          />
          <Field
            name='costPrice'
            component={InputText}
            label='Cost Price'
            placeholder={inventoryDetail.costPrice}
          />
          <Field
            name='retailPrice'
            component={InputText}
            label='Retail Price'
            placeholder={inventoryDetail.retailPrice}
          />
          <Field
            name='qty'
            component={InputText}
            label='Quantity'
            placeholder={inventoryDetail.qty}
          />
          <Field
            name='marginPercentage'
            component={InputText}
            label='Margin Percentage'
            placeholder={inventoryDetail.marginPercentage}
          />
          <Field
            name='sku'
            component={InputText}
            label='SKU'
            placeholder={inventoryDetail.sku}
          />
          <Field
            name='supplierId'
            component={SelectInput}
            label='Supplier'
            placeholder={inventoryDetail.supplier?.name}
          />
          {/* <Field
            name='supplierId'
            component={SelectInput}
            label='Supplier'
            placeholder='Input Supplier'
          /> */}
          <Button type='primary' htmlType='submit' disabled={invalid}>
            Submit
          </Button>
        </Form>
      )}
      {modalAction === 'detail' && (
        <>
          {!inventoryDetail ? (
            <h2>Loading details</h2>
          ) : (
            <>
              <h2>Name : {inventoryDetail.name}</h2>
              <br />
              <p>Id : {inventoryDetail.id}</p>
              <p>Cost Price : {inventoryDetail.costPrice}</p>
              <p>Retail Price : {inventoryDetail.retailPrice}</p>
              <p>Quantity : {inventoryDetail.qty}</p>
              <p>Margin Precentage : {inventoryDetail.marginPrecentage}</p>
              <p>SKU : {inventoryDetail.sku}</p>
              {inventoryDetail.supplier && (
                <>
                  <p>Supplier : {inventoryDetail?.supplier.name}</p>
                  <p>Supplier Address : {inventoryDetail?.supplier.address}</p>
                  <p>Supplier City : {inventoryDetail?.supplier.city}</p>
                  <p>
                    Supplier Post Code : {inventoryDetail?.supplier.postCode}
                  </p>
                </>
              )}
            </>
          )}
        </>
      )}
    </Modal>
  );
};

export default reduxForm({
  form: 'inventoryForm',
  validate,
  enableReinitialize: true,
})(ModalInventoryComponent);
