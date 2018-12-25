export const SUBMISSION_START = 'submission/SUBMISSION_START';
export const SUBMISSION_SUCCESS = 'submission/SUBMISSION_SUCCESS';
export const SUBMISSION_FAILED = 'submission/SUBMISSION_FAILED';

const submitFlag = id => ({
  type: SUBMISSION_START,
  payload: {
    id,
  },
});

const submitFlagSuccess = submission => ({
  type: SUBMISSION_SUCCESS,
  payload: {
    submission,
  },
});

const submitFlagFailed = error => ({
  type: SUBMISSION_FAILED,
  payload: {
    error,
  },
});

const initialState = {
  isLoading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUBMISSION_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUBMISSION_SUCCESS:
    case SUBMISSION_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    default:
      return state;
  }
}

export const actions = {
  submitFlag,
  submitFlagSuccess,
  submitFlagFailed,
};

export const getStatus = ({ submission }) => submission.isLoading;
export const getError = ({ submission }) => submission.error;
