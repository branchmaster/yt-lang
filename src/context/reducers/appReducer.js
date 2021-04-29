import { actions } from '../actions/appActions';

export const appReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_AUTHENTICATED:
      return { ...state, step: action.value };
    default:
      return state;
  }
};
