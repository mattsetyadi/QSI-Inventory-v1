export const initialState = {
  list: [],
  selectedInventory: {},
  selectedIdInventory: '',
  modalAction: 'register',
  currentPage: 0,
  sizePerPage: 1000,
  totalPage: '',
};

export default function InventoryReducer(state = initialState, action) {
  if (!action) return state;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'FETCH_INVENTORY_LIST_FINISHED': {
      const fetchInventory = action;
      newState.list = fetchInventory.data;
      return { ...newState };
    }

    case 'CHANGE_MODAL_INVENTORY_ACTION': {
      const modalAction = action;
      newState.modalAction = modalAction.typeAction;
      return { ...newState };
    }

    case 'SET_INVENTORY_ID': {
      const setId = action;
      newState.selectedIdInventory = setId.id;
      return { ...newState };
    }

    case 'SET_INVENTORY_DETAIL': {
      const setDetail = action;
      newState.selectedInventory = setDetail.data;
      return { ...newState };
    }

    case 'REMOVE_INVENTORY_DETAIL': {
      newState.selectedIdInventory = '';
      newState.selectedInventory = {};
      return { ...newState };
    }

    // Pagination
    case 'SET_CURRENT_PAGE': {
      const setCurrentPage = action;
      newState.currentPage = setCurrentPage.page;
      return { ...newState };
    }

    case 'SET_SIZE_PER_PAGE': {
      const setSizePerPage = action;
      newState.sizePerPage = setSizePerPage.size;
      return { ...newState };
    }
    case 'SET_TOTAL_PAGE': {
      const setTotalPage = action;
      newState.totalPage = setTotalPage.total;
      return { ...newState };
    }

    default:
      return state;
  }
}
