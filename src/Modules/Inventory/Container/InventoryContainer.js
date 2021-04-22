import React, { useEffect } from 'react';

import * as InventoryAction from '../Store/InventoryAction';
import * as SelectorInventory from '../Selector/InventorySelector';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';
import * as TemplateAction from '../../Template/Store/TemplateAction';
import * as SelectorSupplier from '../../Supplier/Selector/SupplierSelector';

import InventoryComponent from '../Component/InventoryComponent';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { reset } from 'redux-form';

const InventoryContainer = (props) => {
  const {
    actionInventory,
    listData,
    actionTemplate,
    totalPage,
    sizePerPage,
    currentPage,
    resetInventoryForm,
  } = props;

  // console.log('props invent container', props);

  const handleAddInventory = () => {
    actionInventory.changeModalAction('register');
    actionTemplate.openModal('Inventory');
  };

  const handleCancelModal = () => {
    actionInventory.changeModalAction('register');
    actionTemplate.openModal('Inventory');
    actionInventory.removeInventoryDetail();
    resetInventoryForm('inventoryForm');
  };

  const handleUpdateInventory = (data) => {
    actionInventory.changeModalAction('update');

    actionInventory.setInventoryId(data.id);
    actionInventory.setInventoryDetail(data);

    actionTemplate.openModal('Inventory');
  };

  const handleDetailInvetory = (data) => {
    actionInventory.changeModalAction('detail');

    actionInventory.setInventoryId(data.id);
    actionInventory.setInventoryDetail(data);

    actionTemplate.openModal('Inventory');
  };

  const handlePageClick = (pageNumber, pageSize) => {
    actionInventory.setCurrentPage(pageNumber);
    actionInventory.setSizePerPage(pageSize);
  };

  useEffect(() => {
    actionInventory.fetchInventoryListRequested();
  }, [actionInventory, totalPage, sizePerPage, currentPage]);

  const columns = [
    {
      title: 'No',
      render: (rowData) => rowData.tableData.id + 1,
      width: 20,
      type: 'numeric',
    },
    {
      title: 'SKU',
      field: 'sku',
      width: '250',
      type: 'numeric',
    },
    { title: 'Inventory Name', field: 'name', width: 550 },
    {
      title: 'Cost Price',
      field: 'costPrice',
      width: 250,
      type: 'numeric',
    },
    {
      title: 'Retail Price',
      field: 'retailPrice',
      width: 250,
      type: 'numeric',
    },
    {
      title: 'Quantity',
      field: 'qty',
      width: 250,
      type: 'numeric',
    },
    {
      title: 'Margin Percentage',
      field: 'marginPercentage',
      width: 250,
      type: 'numeric',
    },
    {
      title: 'Supplier Name',
      field: 'supplier.name',
      width: 250,
    },
    {
      title: 'Supplier Address',
      field: 'supplier.address',
      width: 250,
    },
    {
      title: 'Supplier City',
      field: 'supplier.city',
      width: 250,
    },
    {
      title: 'Postcode',
      field: 'supplier.postCode',
      width: 250,
      type: 'numeric',
    },
  ];

  return (
    <>
      <InventoryComponent
        handleAddInventory={handleAddInventory}
        handleCancelModal={handleCancelModal}
        handleUpdateInventory={handleUpdateInventory}
        handleDetailInvetory={handleDetailInvetory}
        handlePageClick={handlePageClick}
        // columns={columns}
        datas={listData}
        columns={columns}
        {...props}
      />
    </>
  );
};

// const mapStateToProps = (state) => ({
//   listData: state?.inventoryState?.list,
// });

const mapStateToProps = createStructuredSelector({
  listData: SelectorInventory.listSelector(),
  inventoryId: SelectorInventory.idSelector(),
  inventoryDetail: SelectorInventory.selectedInventorySelector(),
  modalInventoryIsShow: SelectorTemplate.modalInventorySelector(),
  totalPage: SelectorInventory.totalPageSelector(),
  currentPage: SelectorInventory.currentPageSelector(),
  sizePerPage: SelectorInventory.sizePerPageSelector(),
  supplierData: SelectorSupplier.listDataSelector(),
  isLoading: SelectorTemplate.loadingSelector(),
  isLoadingComponent: SelectorTemplate.loadingComponentSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
  actionInventory: bindActionCreators(InventoryAction, dispatch),
  resetInventoryForm: bindActionCreators(reset, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(InventoryContainer);
