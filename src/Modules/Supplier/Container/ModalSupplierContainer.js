import React from 'react';
import ModalSupplierComponent from '../Component/ModalSupplierComponent';

import * as SelectorSupplier from '../Selector/SupplierSelector';
import * as SupplierAction from '../Store/SupplierAction';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const ModalSupplierContainer = (props) => {
  const { actionSupplier, modalAction, initialValues } = props;

  console.log('init values', initialValues);

  const handleOnSubmit = () => {
    if (modalAction === 'register') {
      actionSupplier.submitSupplierRequested();
    } else {
      actionSupplier.updateSupplierRequested();
    }
  };

  // const initialValues = {};
  // if (Object.keys(supplierDetail).length > 0) {
  //   const { name, address, city, postCode } = supplierDetail;
  //   initialValues.name = name;
  //   initialValues.address = address;
  //   initialValues.city = city;
  //   initialValues.postCode = postCode;
  // }

  return (
    <>
      <ModalSupplierComponent
        handleOnSubmit={handleOnSubmit}
        // initialValues={initialValues}
        {...props}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  // initialValues untuk jadi props langsung ke redux form
  initialValues: SelectorSupplier.selectedSupplierSelector(),
  modalAction: SelectorSupplier.modalActionSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  actionSupplier: bindActionCreators(SupplierAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ModalSupplierContainer);
