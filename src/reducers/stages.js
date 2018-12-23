import { TRANSACTION_CLEAR } from './transaction';

export const GET_STAGES_START = 'stages/GET_STAGES_START';
export const GET_STAGES_SUCCESS = 'stages/GET_STAGES_SUCCESS';
export const GET_STAGES_FAILED = 'stages/GET_STAGES_FAILED';
export const STAGES_APPEND = 'stages/STAGES_APPEND';
export const STAGE_SELECT_ID = 'stages/STAGE_SELECT_ID';
export const STAGE_SELECT_INDEX = 'stages/STAGE_SELECT_INDEX';
export const GET_STAGE_DETAIL_START = 'stages/GET_STAGE_DETAIL_START';
export const GET_STAGE_DETAIL_SUCCESS = 'stages/GET_STAGE_DETAIL_SUCCESS';
export const GET_STAGE_DETAIL_FAILED = 'stages/GET_STAGE_DETAIL_FAILED';

export const initialState = {
  stages: [],
  currentStage: null,
  isLoading: null,
  error: null,
};

// action creators
const getStages = () => ({
  type: GET_STAGES_START,
});

const getStagesFailed = error => ({
  type: GET_STAGES_FAILED,
  payload: {
    error,
  },
});

const getStagesSuccess = stages => ({
  type: GET_STAGES_SUCCESS,
  payload: {
    stages,
  },
});

const appendStages = stages => ({
  type: STAGES_APPEND,
  payload: {
    stages,
  },
});

const selectStageById = id => ({
  type: STAGE_SELECT_ID,
  payload: {
    id,
  },
});

const selectStageByIndex = index => ({
  type: STAGE_SELECT_INDEX,
  payload: {
    index,
  },
});

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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STAGE_DETAIL_START:
    case GET_STAGES_START: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case GET_STAGE_DETAIL_FAILED:
    case GET_STAGES_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    case GET_STAGES_SUCCESS: {
      const { stages } = action.payload;
      return {
        ...state,
        error: null,
        isLoading: false,
        stages,
      };
    }
    case STAGE_SELECT_ID: {
      const { id } = action.payload;
      const currentStage = state.stages.find(e => e._id === id)  // eslint-disable-line
        || (state.currentStage);
      return {
        ...state,
        currentStage,
      };
    }
    case STAGE_SELECT_INDEX: {
      const { index } = action.payload;
      return {
        ...state,
        currentStage: state.stages[index] || state.currentStage,
      };
    }
    case GET_STAGE_DETAIL_SUCCESS: {
      const { stage } = action.payload;
      return {
        ...state,
        currentStage: stage,
      };
    }
    case TRANSACTION_CLEAR: {
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}

export const actions = {
  getStages,
  getStagesFailed,
  getStagesSuccess,
  appendStages,
  selectStageById,
  selectStageByIndex,
  downloadStageDetail,
  downloadStageDetailFailed,
  downloadStageDetailSuccess,
};

// Selectors
export const getCurrentStage = ({ stages }) => stages.currentStage;
export const getStageList = ({ stages }) => stages.stages;
export const getError = ({ stages }) => stages.error;
export const getStatus = ({ stages }) => stages.isLoading;
