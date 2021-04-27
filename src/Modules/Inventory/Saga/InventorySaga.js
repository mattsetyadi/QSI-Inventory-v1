import * as ActionInventory from '../Store/InventoryAction';
import * as ActionTemplate from '../../Template/Store/TemplateAction';
import * as SelectorInventory from '../Selector/InventorySelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import axios from 'axios';
import { toast } from 'react-toastify';

function* fetchInventoryListProcess() {
  try {
    const page = yield select(SelectorInventory.currentPageSelector());
    const size = yield select(SelectorInventory.sizePerPageSelector());
    yield put(ActionTemplate.setLoadingCompoent(true));
    yield put(ActionTemplate.setLoading(true));
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_APP_URL}/InventoryItem/inquiry/${
        page ? page : '0'
      }/${size ? '1000' : '1000'}`
    );
    // ganti dulu, sizenya ga dipake

    yield put(ActionTemplate.setLoadingCompoent(false));
    yield put(ActionTemplate.setLoading(false));
    yield put(ActionInventory.fetchInventoryListFinished(data));
    yield put(ActionInventory.setCurrentPage(data.page));
    yield put(ActionInventory.setTotalPage(data.totalPages));
    yield put(ActionInventory.setSizePerPage(data.data?.length));
  } catch (error) {
    console.log(error);
  }
}

function* submitInventoryProcess() {
  try {
    console.log('saga invent');
    const name = yield select(SelectorInventory.formNameSelector());
    const costPrice = yield select(SelectorInventory.formCostPriceSelector());
    const retailPrice = yield select(
      SelectorInventory.formRetailPriceSelector()
    );
    const qty = yield select(SelectorInventory.formQuantitySelector());
    const marginPercentage = yield select(
      SelectorInventory.formMarginPercentageSelector()
    );
    const sku = yield select(SelectorInventory.formSkuSelector());
    const supplierId = yield select(SelectorInventory.formSupplierIdSelector());

    yield put(ActionTemplate.setLoadingCompoent(true));
    yield put(ActionTemplate.setLoading(true));

    yield call(
      axios.post,
      `${process.env.REACT_APP_APP_URL}/InventoryItem/AddItem`,
      {
        name,
        costPrice,
        retailPrice,
        qty,
        marginPercentage,
        sku,
        supplierId,
      }
    );
    yield put(ActionInventory.fetchInventoryListRequested());
    yield put(ActionTemplate.setLoadingCompoent(false));
    yield put(ActionTemplate.setLoading(false));
    yield put(ActionTemplate.openModal('Inventory'));
    yield put(ActionInventory.removeInventoryDetail());
    toast.success('New Inventory Submitted');
  } catch (error) {
    console.log('gagal', error);
    toast.error('Terjadi kesalahan');
  }
}

function* updateInventoryProcess() {
  try {
    const id = yield select(SelectorInventory.idSelector());
    const name = yield select(SelectorInventory.formNameSelector());
    const costPrice = yield select(SelectorInventory.formCostPriceSelector());
    const retailPrice = yield select(
      SelectorInventory.formRetailPriceSelector()
    );
    const qty = yield select(SelectorInventory.formQuantitySelector());
    const marginPercentage = yield select(
      SelectorInventory.formMarginPercentageSelector()
    );
    const sku = yield select(SelectorInventory.formSkuSelector());
    const supplierId = yield select(SelectorInventory.formSupplierIdSelector());

    yield put(ActionTemplate.setLoadingCompoent(true));
    yield put(ActionTemplate.setLoading(true));

    yield call(
      axios.put,
      `${process.env.REACT_APP_APP_URL}/InventoryItem/UpdateItem`,
      {
        id,
        name,
        costPrice,
        retailPrice,
        qty,
        marginPercentage,
        sku,
        supplierId,
      }
    );
    yield put(ActionInventory.fetchInventoryListRequested());
    yield put(ActionTemplate.setLoadingCompoent(false));
    yield put(ActionTemplate.openModal('Inventory'));
    yield put(ActionInventory.removeInventoryDetail());
    yield put(ActionTemplate.setLoading(false));
    toast.success('Inventory Updated');
  } catch (error) {
    console.log(error);
    toast.error('terjadi kesalahan');
  }
}

export function* fetchInventoryListAction() {
  yield takeLatest('FETCH_INVENTORY_LIST_REQUESTED', fetchInventoryListProcess);
}

export function* submitInventoryAction() {
  yield takeLatest('SUBMIT_INVENTORY_REQUESTED', submitInventoryProcess);
}
export function* updateInventoryAction() {
  yield takeLatest('UPDATE_INVENTORY_REQUESTED', updateInventoryProcess);
}
