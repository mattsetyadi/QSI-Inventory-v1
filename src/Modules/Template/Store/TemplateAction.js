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
