export const GET_LEVEL_DETAIL_START = 'level/GET_LEVEL_DETAIL_START';
export const GET_LEVEL_DETAIL_SUCCESS = 'level/GET_LEVEL_DETAIL_SUCCESS';
export const GET_LEVEL_DETAIL_FAILED = 'level/GET_LEVEL_DETAIL_FAILED';

const downloadLevelDetail = id => ({
  type: GET_LEVEL_DETAIL_START,
  payload: {
    id,
  },
});

const downloadLevelDetailSuccess = level => ({
  type: GET_LEVEL_DETAIL_SUCCESS,
  payload: {
    level,
  },
});

const downloadLevelDetailFailed = error => ({
  type: GET_LEVEL_DETAIL_FAILED,
  payload: {
    error,
  },
});

const initialState = {
  isLoading: true,
  error: null,
  currentLevel: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEVEL_DETAIL_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_LEVEL_DETAIL_SUCCESS: {
      const { level } = action.payload;
      return {
        ...state,
        currentLevel: level,
        isLoading: false,
      };
    }
    case GET_LEVEL_DETAIL_FAILED: {
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
  downloadLevelDetail,
  downloadLevelDetailSuccess,
  downloadLevelDetailFailed,
};

export const getStatus = ({ level }) => level.isLoading;
export const getLevel = ({ level }) => level.currentLevel;
export const getError = ({ level }) => level.error;
