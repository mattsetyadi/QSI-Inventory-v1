import * as ActionSupplier from '../Store/SupplierAction';
import * as ActionTemplate from '../../Template/Store/TemplateAction';
import * as SelectorSupplier from '../Selector/SupplierSelector';

import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { toast } from 'react-toastify';

function* fetchSupplierListProcess() {
  const page = yield select(SelectorSupplier.supplierCurrentPageSelector());
  const size = yield select(SelectorSupplier.supplierSizePerPageSelector());

  try {
    yield put(ActionTemplate.setLoadingCompoent(true));
    yield put(ActionTemplate.setLoading(true));
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_APP_URL}/Supplier/inquiry/${page ? page : '1'}/${
        size ? '1000' : '1000'
      }`
    );
    yield put(ActionSupplier.fetchSupplierListFinished(data));
    yield put(ActionSupplier.setSupplierCurentPage(data.page));
    yield put(ActionSupplier.setSupplierTotalPage(data.totalPages));
    yield put(ActionSupplier.setSupplierSizePerPage(data.data?.length));
    yield put(ActionTemplate.setLoadingCompoent(false));
    yield put(ActionTemplate.setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

function* submitSupplierProcess() {
  try {
    const name = yield select(SelectorSupplier.formNameSelector());
    const address = yield select(SelectorSupplier.formAddressSelector());
    const city = yield select(SelectorSupplier.formCitySelector());
    const postCode = yield select(SelectorSupplier.formPostCodeSelector());
    const phone = yield select(SelectorSupplier.formPhoneSelector());

    yield put(ActionTemplate.setLoading(true));
    yield put(ActionTemplate.setLoadingCompoent(true));

    yield call(
      axios.post,
      `${process.env.REACT_APP_APP_URL}/Supplier/AddSupplier`,
      {
        name,
        address,
        city,
        postCode,
        contacts: [
          {
            name: 'phone',
            contactType: 'mobilePhone',
            value: phone,
          },
        ],
      }
    );
    yield put(ActionSupplier.fetchSupplierListRequested());
    yield put(ActionTemplate.setLoading(false));
    yield put(ActionTemplate.setLoadingCompoent(false));
    yield put(ActionTemplate.openModal('Supplier'));
    toast.success('New Supplier submitted');
    yield put(ActionSupplier.removeSupplierDetail());
  } catch (error) {
    console.log(error);
  }
}

function* setSupplierDetailProcess() {
  try {
    const id = yield select(SelectorSupplier.idSelector());
    const { data } = yield call(
      axios.get,
      `${process.env.REACT_APP_APP_URL}/Supplier/${id}`
    );

    console.log('data from saga', data);
  } catch (error) {
    console.log(error);
  }
}

function* updateSupplierProcess() {
  try {
    const id = yield select(SelectorSupplier.idSelector());
    const name = yield select(SelectorSupplier.formNameSelector());
    const address = yield select(SelectorSupplier.formAddressSelector());
    const city = yield select(SelectorSupplier.formCitySelector());
    const postCode = yield select(SelectorSupplier.formPostCodeSelector());
    const phone = yield select(SelectorSupplier.formPhoneSelector());

    yield put(ActionTemplate.setLoading(true));
    yield put(ActionTemplate.setLoadingCompoent(true));

    yield call(
      axios.put,
      `${process.env.REACT_APP_APP_URL}/Supplier/UpdateSupplier`,
      {
        id,
        name,
        address,
        city,
        postCode,
        contacts: [
          {
            name: 'phone',
            contactType: 'mobilePhone',
            value: phone,
          },
        ],
      }
    );
    yield put(ActionSupplier.fetchSupplierListRequested());
    yield put(ActionTemplate.setLoading(false));
    yield put(ActionTemplate.setLoadingCompoent(false));
    yield put(ActionTemplate.openModal('Supplier'));
    toast.success('Supplier Updated');
    yield put(ActionSupplier.removeSupplierDetail());
  } catch (error) {
    console.log(error);
  }
}

export function* fetchSupplierListAction() {
  yield takeLatest('FETCH_SUPPLIER_LIST_REQUESTED', fetchSupplierListProcess);
}

export function* submitSupplierAction() {
  yield takeLatest('SUBMIT_SUPPLIER_REQUESTED', submitSupplierProcess);
}

export function* setSupplierDetailAction() {
  yield takeLatest('SET_SUPPLIER_DATA_REQUESTED', setSupplierDetailProcess);
}

export function* updateSupplierAction() {
  yield takeLatest('UPDATE_SUPPLIER_REQUESTED', updateSupplierProcess);
}
