import React from 'react';
import { Button, Form, Modal } from 'antd';

import validate from '../Validation/SupplierValidation';
import { InputText } from '../../../Assets/Components/CInputText';
import { Field, reduxForm } from 'redux-form';

const ModalSupplierComponent = (props) => {
  // console.log('props modal suplier component', props);

  const {
    modalSupplierIsShow,
    handleCancelModal,
    handleOnSubmit,
    modalAction,
    supplierDetail,
  } = props;

  return (
    <Modal
      title='Basic Modal'
      visible={modalSupplierIsShow}
      onCancel={handleCancelModal}
      footer={null}
    >
      {modalAction === 'update' ? (
        <>
          <Form onFinish={handleOnSubmit} layout='vertical'>
            <Field
              name='name'
              component={InputText}
              label='Name'
              placeholder={supplierDetail?.name}
            />
            <Field
              name='address'
              component={InputText}
              label='Address'
              placeholder={supplierDetail?.address}
            />
            <Field
              name='city'
              component={InputText}
              label='City'
              placeholder={supplierDetail?.city}
            />
            <Field
              name='postCode'
              component={InputText}
              label='Postal Code'
              placeholder={supplierDetail?.postCode}
            />
            <Field
              name='phone'
              component={InputText}
              label='Phone'
              placeholder='Input phone here'
            />
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form>
        </>
      ) : (
        <>
          <Form onFinish={handleOnSubmit} layout='vertical'>
            <Field
              name='name'
              component={InputText}
              label='Name'
              placeholder='Input name here'
            />
            <Field
              name='address'
              component={InputText}
              label='Address'
              placeholder='Input address here'
            />
            <Field
              name='city'
              component={InputText}
              label='City'
              placeholder='Input city here'
            />
            <Field
              name='postCode'
              component={InputText}
              label='Postal Code'
              placeholder='Input postal code here'
            />
            <Field
              name='phone'
              component={InputText}
              label='Phone'
              placeholder='Input phone here'
            />
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form>
        </>
      )}
    </Modal>
  );
};

export default reduxForm({
  form: 'supplierForm',
  validate,
  enableReinitialize: true,
})(ModalSupplierComponent);
