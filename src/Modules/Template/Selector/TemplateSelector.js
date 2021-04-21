import { createSelector } from 'reselect';

// Select state from combiner reducer or global state
const templateState = (state) => state.templateState;

export const sideIsOpenSelector = () =>
  createSelector(templateState, (state) => state.siderIsOpen);
export const modalSupplierSelector = () =>
  createSelector(templateState, (state) => state.showModalSupplier);
export const modalInventorySelector = () =>
  createSelector(templateState, (state) => state.showModalInventory);
