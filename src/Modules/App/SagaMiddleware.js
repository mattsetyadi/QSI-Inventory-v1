import { all, fork } from 'redux-saga/effects';

import {
  fetchInventoryListAction,
  submitInventoryAction,
  updateInventoryAction,
} from '../Inventory/Saga/InventorySaga';
import {
  fetchSupplierListAction,
  submitSupplierAction,
  setSupplierDetailAction,
  updateSupplierAction,
} from '../Supplier/Saga/SupplierSaga';

export default function* SagaMiddleware() {
  yield all([
    fork(fetchInventoryListAction),
    fork(submitInventoryAction),
    fork(updateInventoryAction),

    fork(fetchSupplierListAction),
    fork(submitSupplierAction),
    fork(setSupplierDetailAction),
    fork(updateSupplierAction),
  ]);
}
