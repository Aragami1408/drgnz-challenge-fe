import {
  VALIDATE_TOKEN_SUCCESS,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
} from './auth';

const initialState = {
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case VALIDATE_TOKEN_SUCCESS:
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS: {
      return {
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

export const getSystemLoadingStatus = ({ system }) => system.isLoading;
