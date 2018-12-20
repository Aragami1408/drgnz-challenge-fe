import moment from 'moment';

const LOG_IN_USER = 'auth/LOG_IN_USER';
const LOG_IN_SUCCESS = 'auth/LOG_IN_SUCCESS';

const initialState = {
  token: '',
  username: '',
  isLoading: null,
  issuedAt: null,
  loggedIn: null,
};

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOG_IN_USER:
      return {
        ...state,
        isLoading: true,
        loggedIn: false,
      };
    case LOG_IN_SUCCESS: {
      // contains token, username
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        issuedAt: moment().utc(),
        loggedIn: true,
        ...payload,
      };
    }
    default:
      return state;
  }
};
export default authReducer;
