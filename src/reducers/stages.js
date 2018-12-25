import { TRANSACTION_CLEAR } from './transaction';

export const GET_STAGES_START = 'stages/GET_STAGES_START';
export const GET_STAGES_SUCCESS = 'stages/GET_STAGES_SUCCESS';
export const GET_STAGES_FAILED = 'stages/GET_STAGES_FAILED';
export const STAGES_APPEND = 'stages/STAGES_APPEND';

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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_STAGES_START: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
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
};

// Selectors
export const getStageList = ({ stages }) => stages.stages;
export const getError = ({ stages }) => stages.error;
export const getStatus = ({ stages }) => stages.isLoading;
