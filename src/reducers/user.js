import { handleActions } from 'redux-actions';
import * as userActions from '../actions/user-actions';

export default handleActions({
  [userActions.userLoggedIn]: (state, { payload: { user } }) => {
    return ({
      ...state,
      user,
      error: null,
    });
  },
  [userActions.userLoginError]: (state, { payload: { err } }) => ({
    ...state,
    user: null,
    error: err.message,
  }),
  [userActions.userLoggedOut]: (state, action) => ({
    ...state,
    user: null,
    error: null,
  }),
}, {
  user: null,
  error: null,
});