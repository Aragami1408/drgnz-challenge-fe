import moment from 'moment';

export const LOGIN_START = 'auth/LOGIN_START';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'auth/LOGIN_FAILED';


export const initialState = {
  username: null,
  token: null,
  authenticated: null,
  timestamp: null,
  isLoggingIn: null,
  error: null,
};

export const getAuth = ({ auth }) => auth.authenticated;
export const getAuthError = ({ auth }) => auth.error;
export const getLoginStatus = ({ auth }) => auth.isLoggingIn;

// action creators

const login = (username, password) => ({
  type: LOGIN_START,
  payload: {
    timestamp: moment().utc().format(),
    username,
    password,
  },
});

const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: {
    error,
  },
});

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: {
    token,
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      const { timestamp, username } = action.payload;
      return {
        ...state,
        timestamp,
        username,
        isLoggingIn: true,
        authenticated: false,
        error: null,
      };
    }
    case LOGIN_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        isLoggingIn: false,
        authenticated: false,
        error,
      };
    }
    case LOGIN_SUCCESS: {
      const { token } = action.payload;
      return {
        ...state,
        token,
        isLoggingIn: false,
        authenticated: true,
        error: null,
      };
    }
    default: return state;
  }
}

export const actions = {
  login,
  loginFailed,
  loginSuccess,
};

// Selectors
export const isAuthenticated = state => state.auth.authenticated;
export const hasPreviouslyAuthenticated = state => (
  state.auth.username !== null && state.auth.token !== null
);
export const getUsername = state => state.auth.username;
export const getToken = state => state.auth.token;
