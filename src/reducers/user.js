import { LOGOUT } from './auth';

export const DOWNLOAD_USER_INFO_START = 'user/DOWNLOAD_USER_INFO_START';
export const DOWNLOAD_USER_INFO_SUCCESS = 'user/DOWNLOAD_USER_INFO_SUCCESS';
export const DOWNLOAD_USER_INFO_FAILED = 'user/DOWNLOAD_USER_INFO_FAILED';

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

const initialState = {
  user: null,
  isLoading: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
    case DOWNLOAD_USER_INFO_FAILED: {
      const { error } = action.payload || {};
      return {
        ...state,
        error,
        isLoading: false,
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
};

export const IAmDrgnz = ({ user }) => user.user.IAmDrgnz;
