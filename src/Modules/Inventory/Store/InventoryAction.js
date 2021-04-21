export function fetchInventoryListRequested() {
  return {
    type: 'FETCH_INVENTORY_LIST_REQUESTED',
  };
}

export function fetchInventoryListFinished(data) {
  return {
    type: 'FETCH_INVENTORY_LIST_FINISHED',
    data,
  };
}

export function changeModalAction(typeAction) {
  return {
    type: 'CHANGE_MODAL_INVENTORY_ACTION',
    typeAction,
  };
}

export function submitInventoryRequested() {
  return {
    type: 'SUBMIT_INVENTORY_REQUESTED',
  };
}

export function setInventoryId(id) {
  return {
    type: 'SET_INVENTORY_ID',
    id,
  };
}

export function setInventoryDetail(data) {
  return {
    type: 'SET_INVENTORY_DETAIL',
    data,
  };
}

export function removeInventoryDetail() {
  return {
    type: 'REMOVE_INVENTORY_DETAIL',
  };
}

export function updateInventoryRequested() {
  return {
    type: 'UPDATE_INVENTORY_REQUESTED',
  };
}

// Pagiantion
export function setCurrentPage(page) {
  return {
    type: 'SET_CURRENT_PAGE',
    page,
  };
}

export function setSizePerPage(size) {
  return {
    type: 'SET_SIZE_PER_PAGE',
    size,
  };
}
export function setTotalPage(total) {
  return {
    type: 'SET_TOTAL_PAGE',
    total,
  };
}
