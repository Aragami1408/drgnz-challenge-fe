export const GET_LEVEL_DETAIL_START = 'stages/GET_LEVEL_DETAIL_START';
export const GET_LEVEL_DETAIL_SUCCESS = 'stages/GET_LEVEL_DETAIL_SUCCESS';
export const GET_LEVEL_DETAIL_FAILED = 'stages/GET_LEVEL_DETAIL_FAILED';

const downloadLevelDetail = id => ({
  type: GET_LEVEL_DETAIL_START,
  payload: {
    id,
  },
});

const downloadLevelDetailSuccess = stage => ({
  type: GET_LEVEL_DETAIL_SUCCESS,
  payload: {
    stage,
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
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEVEL_DETAIL_START: {
      return state;
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

export const getSystemLoadingStatus = ({ system }) => system.isLoading;
