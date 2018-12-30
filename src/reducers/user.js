import { LOGOUT } from './auth';

export const DOWNLOAD_USER_INFO_START = 'user/DOWNLOAD_USER_INFO_START';
export const DOWNLOAD_USER_INFO_SUCCESS = 'user/DOWNLOAD_USER_INFO_SUCCESS';
export const DOWNLOAD_USER_INFO_FAILED = 'user/DOWNLOAD_USER_INFO_FAILED';
export const UPDATE_USER_INFO_START = 'user/UPDATE_USER_INFO_START';
export const UPDATE_USER_INFO_SUCCESS = 'user/UPDATE_USER_INFO_SUCCESS';
export const UPDATE_USER_INFO_FAILED = 'user/UPDATE_USER_INFO_FAILED';

const downloadUserInfo = id => ({
  type: DOWNLOAD_USER_INFO_START,
  payload: {
    id,
  },
});

const downloadUserInfoSuccess = user => ({
  type: DOWNLOAD_USER_INFO_SUCCESS,
  payload: {
    user,
  },
});

const downloadUserInfoFailed = error => ({
  type: DOWNLOAD_USER_INFO_FAILED,
  payload: {
    error,
  },
});

/**
 *
 * @param {Object} user
 * Should contains id, username, fullname and new password
 */
const updateUserInfo = user => ({
  type: UPDATE_USER_INFO_START,
  payload: {
    user,
  },
});

const updateUserInfoSuccess = user => ({
  type: UPDATE_USER_INFO_SUCCESS,
  payload: {
    user,
  },
});

const updateUserInfoFailed = error => ({
  type: UPDATE_USER_INFO_FAILED,
  payload: {
    error,
  },
});

const initialState = {
  user: {},
  isLoading: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO_START:
    case DOWNLOAD_USER_INFO_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DOWNLOAD_USER_INFO_SUCCESS: {
      const { user } = action.payload || {};
      return {
        isLoading: false,
        error: null,
        user,
      };
    }
    case UPDATE_USER_INFO_FAILED:
    case DOWNLOAD_USER_INFO_FAILED: {
      const { error } = action.payload || {};
      return {
        ...state,
        error,
        isLoading: false,
      };
    }
    case UPDATE_USER_INFO_SUCCESS: {
      const { user } = action.payload || {};
      return {
        isLoading: false,
        error: null,
        user,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}

export const actions = {
  downloadUserInfo,
  downloadUserInfoSuccess,
  downloadUserInfoFailed,
  updateUserInfo,
  updateUserInfoSuccess,
  updateUserInfoFailed,
};

export const IAmDrgnz = ({ user }) => (user.user || {}).IAmDrgnz;
export const selectUser = ({ user }) => user.user || {};
export const selectStatus = ({ user }) => user.isLoading || false;
export const selectError = ({ user }) => user.error || '';
