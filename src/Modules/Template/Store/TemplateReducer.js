// import { Action } from 'redux';
export const initialState = {
  siderIsOpen: true,
  showModalSupplier: false,
  showModalInventory: false,
};

export default function TemplateReducer(state = initialState, action) {
  if (!action) return state;
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'TOGGLE_SIDER': {
      // describe action from action to be descriptive,
      // and get initial from parameter action >> action.status >> toggleSider.status
      const toggleSider = action;
      newState.siderIsOpen = toggleSider.status;
      return { ...newState };
    }
    case 'OPEN_MODAL': {
      const openModal = action;
      const component = openModal.component;
      newState[`showModal${component}`] = !state[`showModal${component}`];
      return { ...newState };
    }
    default:
      return state;
  }
  // return state;
}
