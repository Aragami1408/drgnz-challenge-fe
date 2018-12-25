export const GET_STAGE_DETAIL_START = 'stage/GET_STAGE_DETAIL_START';
export const GET_STAGE_DETAIL_SUCCESS = 'stage/GET_STAGE_DETAIL_SUCCESS';
export const GET_STAGE_DETAIL_FAILED = 'stage/GET_STAGE_DETAIL_FAILED';

const downloadStageDetail = id => ({
  type: GET_STAGE_DETAIL_START,
  payload: {
    id,
  },
});

const downloadStageDetailSuccess = stage => ({
  type: GET_STAGE_DETAIL_SUCCESS,
  payload: {
    stage,
  },
});

const downloadStageDetailFailed = error => ({
  type: GET_STAGE_DETAIL_FAILED,
  payload: {
    error,
  },
});

const initialState = {
  isLoading: true,
  error: null,
  currentStage: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STAGE_DETAIL_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_STAGE_DETAIL_SUCCESS: {
      const { stage } = action.payload;
      return {
        ...state,
        currentStage: stage,
        isLoading: false,
      };
    }
    case GET_STAGE_DETAIL_FAILED: {
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
  downloadStageDetail,
  downloadStageDetailSuccess,
  downloadStageDetailFailed,
};

export const getStatus = ({ stage }) => stage.isLoading;
export const getStage = ({ stage }) => stage.currentStage;
export const getError = ({ stage }) => stage.error;
