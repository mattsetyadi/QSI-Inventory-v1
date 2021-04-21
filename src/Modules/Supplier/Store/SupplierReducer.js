export const initialState = {
  list: [],
  selectedIdSupplier: '',
  selectedSupplier: {},
  modalAction: 'register',
  currentPage: 0,
  sizePerPage: 1000,
  totalPage: '',
};

export default function SupplierReducer(state = initialState, action) {
  if (!action) return state;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'FETCH_SUPPLIER_LIST_FINISHED': {
      const fetchSupier = action;
      newState.list = fetchSupier.data;
      return { ...newState };
    }
    case 'CHANGE_MODAL_SUPPLIER_ACTION': {
      const modalAction = action;
      newState.modalAction = modalAction.typeAction;
      return { ...newState };
    }

    case 'SET_SUPPLIER_ID': {
      const setId = action;
      newState.selectedIdSupplier = setId.id;
      return { ...newState };
    }

    case 'SET_SUPPLIER_DETAIL': {
      const setDetail = action;
      newState.selectedSupplier = setDetail.data;
      return { ...newState };
    }

    case 'REMOVE_SUPPLIER_DETAIL': {
      newState.selectedIdSupplier = '';
      newState.selectedSupplier = {};
      return { ...state };
    }

    case 'SET_SUPPLIER_CURRENT_PAGE': {
      const setSupplierCurrentPage = action;
      newState.currentPage = setSupplierCurrentPage.page;
      return { ...newState };
    }

    case 'SET_SUPPLIER_SIZE_PER_PAGE': {
      const setSupplierSizePerPage = action;
      newState.sizePerPage = setSupplierSizePerPage.size;
      return { ...newState };
    }

    case 'SET_SUPPLIER_TOTAL_PAGE': {
      const setSupplierTotalPage = action;
      newState.totalPage = setSupplierTotalPage.total;
      return { ...newState };
    }

    default:
      return state;
  }
}
