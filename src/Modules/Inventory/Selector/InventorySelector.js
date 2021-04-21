import { createSelector } from 'reselect';

const inventoryState = (state) => state?.inventoryState;
const inventoryFormState = (state) => state?.form?.inventoryForm?.values;

// =>>> jangan dibuat objek
// export const listSelector = () => {
//   createSelector(inventoryState, (state) => state?.list);
// };
export const listSelector = () =>
  createSelector(inventoryState, (state) => state.list);
export const idSelector = () =>
  createSelector(inventoryState, (state) => state.selectedIdInventory);
export const selectedInventorySelector = () =>
  createSelector(inventoryState, (state) => state.selectedInventory);
export const modalActionSelector = () =>
  createSelector(inventoryState, (state) => state.modalAction);

// Select paagination
export const currentPageSelector = () =>
  createSelector(inventoryState, (state) => state.currentPage);
export const sizePerPageSelector = () =>
  createSelector(inventoryState, (state) => state.sizePerPage);
export const totalPageSelector = () =>
  createSelector(inventoryState, (state) => state.totalPage);

// SELECTOR FORM
export const formNameSelector = () =>
  createSelector(inventoryFormState, (state) => state.name);
export const formCostPriceSelector = () =>
  createSelector(inventoryFormState, (state) => state.costPrice);
export const formRetailPriceSelector = () =>
  createSelector(inventoryFormState, (state) => state.retailPrice);
export const formQuantitySelector = () =>
  createSelector(inventoryFormState, (state) => state.qty);
export const formMarginPercentageSelector = () =>
  createSelector(inventoryFormState, (state) => state.marginPercentage);
export const formSkuSelector = () =>
  createSelector(inventoryFormState, (state) => state.sku);
export const formSupplierIdSelector = () =>
  createSelector(inventoryFormState, (state) => state.supplierId);
