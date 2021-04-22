export function toggleSider(status = false) {
  return {
    type: 'TOGGLE_SIDER',
    status,
  };
}

export function openModal(component) {
  return {
    type: 'OPEN_MODAL',
    component,
  };
}

export function setLoading(status) {
  return {
    type: 'SET_LOADING',
    status,
  };
}

export function setLoadingCompoent(status) {
  return {
    type: 'SET_LOADING_COMPONENT',
    status,
  };
}
