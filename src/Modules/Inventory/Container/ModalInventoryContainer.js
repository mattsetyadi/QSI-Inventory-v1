import React from 'react';

import ModalInventoryComponent from '../Component/ModalInventoryComponent';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import * as InventoryAction from '../Store/InventoryAction';
import * as SelectorInventory from '../Selector/InventorySelector';
import * as SelectorSupplier from '../../Supplier/Selector/SupplierSelector';

const ModalInventoryContainer = (props) => {
  // console.log('modal inventory container props', props);
  const { actionInventory, modalAction, inventoryDetail } = props;

  // console.log('invent detail', inventoryDetail);

  const handleOnSubmit = () => {
    if (modalAction === 'register') {
      actionInventory.submitInventoryRequested();
      //   console.log('add to inventory in handle on submit');
      // resetInventoryForm('inventoryForm');
    } else {
      actionInventory.updateInventoryRequested();
      // resetInventoryForm('inventoryForm');
      // console.log('update form');
    }
  };

  // Efisiensi
  const initialValues = { ...inventoryDetail };
  // if (Object.keys(inventoryDetail).length > 0) {
  //   const {
  //     name,
  //     costPrice,
  //     retailPrice,
  //     qty,
  //     marginPercentage,
  //     sku,
  //     supplier,
  //   } = inventoryDetail;
  //   initialValues.name = name;
  //   initialValues.costPrice = costPrice;
  //   initialValues.retailPrice = retailPrice;
  //   initialValues.qty = qty;
  //   initialValues.marginPercentage = marginPercentage;
  //   initialValues.sku = sku;
  initialValues.supplierId = inventoryDetail.supplier?.id ?? '';
  // }

  return (
    <>
      <ModalInventoryComponent
        handleOnSubmit={handleOnSubmit}
        initialValues={initialValues}
        {...props}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  // inventoryDetail: SelectorInventory,
  suppliers: SelectorSupplier.listDataSelector(),
  modalAction: SelectorInventory.modalActionSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  actionInventory: bindActionCreators(InventoryAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ModalInventoryContainer);
