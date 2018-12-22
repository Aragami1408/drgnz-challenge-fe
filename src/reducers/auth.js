import moment from 'moment';

export const LOGIN_START = 'auth/LOGIN_START';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'auth/LOGIN_FAILED';
export const SIGNUP_START = 'auth/SIGNUP_START';
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'auth/SIGNUP_FAILED';

export const initialState = {
  username: null,
  token: null,
  authenticated: null,
  timestamp: null,
  isLoading: null,
  error: null,
};

export const getAuth = ({ auth }) => auth.authenticated;
export const getAuthError = ({ auth }) => auth.error;
export const getAuthStatus = ({ auth }) => auth.isLoading;

// action creators
const login = (username, password) => ({
  type: LOGIN_START,
  payload: {
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
    timestamp: moment().utc().format(),
    token,
  },
});
// ============ register ===================
const register = (username, password, recaptcha) => ({
  type: SIGNUP_START,
  payload: {
    recaptcha,
    username,
    password,
  },
});

const registerFailed = error => ({
  type: SIGNUP_FAILED,
  payload: {
    error,
  },
});

const registerSuccess = (username, token) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    timestamp: moment().utc().format(),
    username,
    token,
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      const { username } = action.payload;
      return {
        ...state,
        username,
        isLoading: true,
        authenticated: false,
        error: null,
      };
    }
    case SIGNUP_FAILED:
    case LOGIN_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        error,
      };
    }
    case LOGIN_SUCCESS: {
      const { token, timestamp } = action.payload;
      return {
        ...state,
        token,
        timestamp,
        isLoading: false,
        authenticated: true,
        error: null,
      };
    }
    case SIGNUP_START: {
      return {
        ...state,
        isLoading: true,
        authenticated: false,
        error: null,
      };
    }
    case SIGNUP_SUCCESS: {
      const { username, token, timestamp } = action.payload;
      return {
        ...state,
        timestamp,
        username,
        token,
        isLoading: false,
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
  register,
  registerFailed,
  registerSuccess,
};

// Selectors
export const isAuthenticated = state => state.auth.authenticated;
export const hasPreviouslyAuthenticated = state => (
  state.auth.username !== null && state.auth.token !== null
);
export const getUsername = state => state.auth.username;
export const getToken = state => state.auth.token;
