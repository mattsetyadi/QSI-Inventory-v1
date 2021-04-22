import React, { useEffect } from 'react';
import SupplierComponent from '../Component/SupplierComponent';

import * as SelectorSupplier from '../Selector/SupplierSelector';
import * as SupplierAction from '../Store/SupplierAction';
import * as TemplateAction from '../../Template/Store/TemplateAction';
import * as SelectorTemplate from '../../Template/Selector/TemplateSelector';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';

const SuplierContainer = (props) => {
  //   console.log(props);
  const {
    actionSupplier,
    actionTemplate,
    // supplierId,
    // supplierData,
    // supplierDetail,
    totalPage,
    sizePerPage,
    currentPage,
  } = props;

  useEffect(() => {
    actionSupplier.fetchSupplierListRequested();
  }, [actionSupplier, totalPage, sizePerPage, currentPage]);

  // const handleSupplierId = (id) => {
  //   console.log('id of supplier set');
  //   // actionSupplier.setSupplierDetail(supplierData.id === );
  // };

  //   const handleSupplierDetail = (id) => {
  //     actionSupplier.setSupplierDetail(supplierData[id]);
  //   };

  const handleAddSupplier = () => {
    actionSupplier.changeModalAction('register');
    actionTemplate.openModal('Supplier');
  };

  const handleUpdateSupplier = (data) => {
    actionSupplier.changeModalAction('update');
    actionSupplier.setSupplierId(data.id);
    actionSupplier.setSupplierDetail(data);
    actionTemplate.openModal('Supplier');
  };

  const handleCancelModal = () => {
    actionSupplier.changeModalAction('register');
    actionSupplier.removeSupplierDetail();
    actionTemplate.openModal('Supplier');
  };

  const handlePageClick = (pageNumber, pageSize) => {
    actionSupplier.setSupplierCurrentPage(pageNumber);
    actionSupplier.setSupplierSizePerPage(pageSize);
  };

  const columns = [
    {
      title: 'No',
      render: (rowData) => rowData.tableData.id + 1,
      width: 20,
    },
    { title: 'Inventory Name', field: 'name', width: 550 },
    {
      title: 'Address',
      field: 'address',
      width: 250,
    },
    {
      title: 'City',
      field: 'city',
      width: 250,
    },
    {
      title: 'Postcode',
      field: 'postCode',
      width: 250,
    },
  ];

  return (
    <div>
      <SupplierComponent
        handleAddSupplier={handleAddSupplier}
        handleCancelModal={handleCancelModal}
        handleUpdateSupplier={handleUpdateSupplier}
        handlePageClick={handlePageClick}
        columns={columns}
        {...props}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  listData: SelectorSupplier.listSelector(),
  supplierData: SelectorSupplier.listDataSelector(),
  supplierId: SelectorSupplier.idSelector(),
  supplierDetail: SelectorSupplier.selectedSupplierSelector(),
  totalPage: SelectorSupplier.supplierTotalPageSelector(),
  currentPage: SelectorSupplier.supplierCurrentPageSelector(),
  sizePerPage: SelectorSupplier.supplierSizePerPageSelector(),
  modalSupplierIsShow: SelectorTemplate.modalSupplierSelector(),
  isLoading: SelectorTemplate.loadingSelector(),
  isLoadingComponent: SelectorTemplate.loadingComponentSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  actionSupplier: bindActionCreators(SupplierAction, dispatch),
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(SuplierContainer);
