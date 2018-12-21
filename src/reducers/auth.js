import moment from 'moment';

export const AUTH_USER_LOGIN_SUCCESS_TOKEN = 'auth/LOGIN_SUCCESS_TOKEN';
export const AUTH_USER_LOGIN_FAIL = 'auth/LOGIN_FAIL';
export const AUTH_USER_LOGIN_START = 'auth/LOGIN_START';
export const AUTH_CONFIRM_USER_VALIDATE = 'auth/CONFIRM_USER_VALIDATED';
export const AUTH_VALIDATE_USER = 'auth/VALIDATE_USER';
export const AUTH_USER_LOGOUT_START = 'auth/LOGOUT_START';
export const AUTH_USER_LOGOUT = 'auth/LOGOUT';

export const initialState = {
  username: null,
  token: null,
  authenticated: null,
  timestamp: null,
  isLoggingIn: null,
  error: undefined,
};

// action creators

const loginWithToken = (token, username) => ({
  type: AUTH_USER_LOGIN_SUCCESS_TOKEN,
  payload: {
    timestamp: moment().format(),
    token,
    username,
  },
});

const logoutUser = () => ({
  type: AUTH_USER_LOGOUT_START,
});

const loginUser = () => ({
  type: AUTH_USER_LOGIN_START,
});

const confirmUserValidated = () => ({
  type: AUTH_CONFIRM_USER_VALIDATE,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_LOGIN_START: {
      return {
        ...initialState,
        isLoggingIn: true,
      };
    }
    case AUTH_USER_LOGIN_SUCCESS_TOKEN: {
      const { token, timestamp, username } = action.payload;
      return {
        ...state,
        timestamp,
        token,
        username,
        isLoggingIn: false,
        authenticated: true,
        error: undefined,
      };
    }

    case AUTH_USER_LOGIN_FAIL: {
      const { error } = action;
      return {
        ...state,
        error,
        isLoggingIn: false,
        authenticated: false,
      };
    }
    case AUTH_CONFIRM_USER_VALIDATE: {
      return {
        ...state,
        authenticated: true,
        isLoggingIn: false,
      };
    }
    case AUTH_USER_LOGOUT: {
      return initialState;
    }
    default: return state;
  }
}

export const actions = {
  loginUser,
  logoutUser,
  loginWithToken,
  confirmUserValidated,
};

// Selectors
export const isAuthenticated = state => state.auth.authenticated;
export const hasPreviouslyAuthenticated = state => (
  state.auth.username !== null && state.auth.token !== null
);
export const getUsername = state => state.auth.username;
export const getToken = state => state.auth.token;