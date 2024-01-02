export const stateManager = {
  state: { shipments: [] },

  updateState(newState) {
    this.state = { ...this.state, ...newState };
  },

  getState() {
    return { ...this.state };
  },
};
