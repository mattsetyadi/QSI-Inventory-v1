export function fetchSupplierListRequested() {
  return {
    type: 'FETCH_SUPPLIER_LIST_REQUESTED',
  };
}
export function fetchSupplierListFinished(data) {
  return {
    type: 'FETCH_SUPPLIER_LIST_FINISHED',
    data,
  };
}

export function submitSupplierRequested() {
  return {
    type: 'SUBMIT_SUPPLIER_REQUESTED',
  };
}

export function changeModalAction(typeAction) {
  return {
    type: 'CHANGE_MODAL_SUPPLIER_ACTION',
    typeAction,
  };
}

export function setSupplierId(id) {
  return {
    type: 'SET_SUPPLIER_ID',
    id,
  };
}

export function setSupplierDetail(data) {
  return {
    type: 'SET_SUPPLIER_DETAIL',
    data,
  };
}

export function removeSupplierDetail() {
  return {
    type: 'REMOVE_SUPPLIER_DETAIL',
  };
}

export function updateSupplierRequested() {
  return {
    type: 'UPDATE_SUPPLIER_REQUESTED',
  };
}

export function setSupplierCurentPage(page) {
  return {
    type: 'SET_SUPPLIER_CURRENT_PAGE',
    page,
  };
}

export function setSupplierSizePerPage(size) {
  return {
    type: 'SET_SUPPLIER_SIZE_PER_PAGE',
    size,
  };
}

export function setSupplierTotalPage(total) {
  return {
    type: 'SET_SUPPLIER_TOTAL_PAGE',
    total,
  };
}
