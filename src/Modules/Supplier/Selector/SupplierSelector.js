import { createSelector } from 'reselect';

const supplierState = (state) => state?.supplierState;
const supplierFormState = (state) => state?.form?.supplierForm?.values;

export const listSelector = () =>
  createSelector(supplierState, (state) => state.list);
export const listDataSelector = () =>
  createSelector(supplierState, (state) => state.list.data);
export const modalActionSelector = () =>
  createSelector(supplierState, (state) => state.modalAction);

export const idSelector = () =>
  createSelector(supplierState, (state) => state.selectedIdSupplier);

export const selectedSupplierSelector = () =>
  createSelector(supplierState, (state) => state?.selectedSupplier);

// Pagination
export const supplierCurrentPageSelector = () =>
  createSelector(supplierState, (state) => state?.currentPage);
export const supplierSizePerPageSelector = () =>
  createSelector(supplierState, (state) => state?.sizePerPage);
export const supplierTotalPageSelector = () =>
  createSelector(supplierState, (state) => state?.totalPage);

// SELECTOR FORM
export const formNameSelector = () =>
  createSelector(supplierFormState, (state) => state.name);
export const formAddressSelector = () =>
  createSelector(supplierFormState, (state) => state.address);
export const formCitySelector = () =>
  createSelector(supplierFormState, (state) => state.city);
export const formPostCodeSelector = () =>
  createSelector(supplierFormState, (state) => state.postCode);
export const formPhoneSelector = () =>
  createSelector(supplierFormState, (state) => state.phone);
