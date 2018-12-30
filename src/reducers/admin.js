import { TRANSACTION_CLEAR } from './transaction';

export const SUBMIT_LEVEL_START = 'admin/SUBMIT_LEVEL_START';
export const SUBMIT_LEVEL_SUCCESS = 'admin/SUBMIT_LEVEL_SUCCESS';
export const SUBMIT_LEVEL_FAILED = 'admin/SUBMIT_LEVEL_FAILED';

export const DOWNLOAD_LEVEL_DETAIL_START = 'admin/DOWNLOAD_LEVEL_DETAIL_START';
export const DOWNLOAD_LEVEL_DETAIL_SUCCESS = 'admin/DOWNLOAD_LEVEL_DETAIL_SUCCESS';
export const DOWNLOAD_LEVEL_DETAIL_FAILED = 'admin/DOWNLOAD_LEVEL_DETAIL_FAILED';

export const DOWNLOAD_STAGE_DETAIL_START = 'admin/DOWNLOAD_STAGE_DETAIL_START';
export const DOWNLOAD_STAGE_DETAIL_SUCCESS = 'admin/DOWNLOAD_STAGE_DETAIL_SUCCESS';
export const DOWNLOAD_STAGE_DETAIL_FAILED = 'admin/DOWNLOAD_STAGE_DETAIL_FAILED';

const submitLevell = level => ({
  type: SUBMIT_LEVEL_START,
  payload: {
    level,
  },
});

const submitLevellSuccess = () => ({
  type: SUBMIT_LEVEL_SUCCESS,
});

const submitLevellFailed = error => ({
  type: SUBMIT_LEVEL_FAILED,
  payload: {
    error,
  },
});


const downloadStageDetail = id => ({
  type: DOWNLOAD_STAGE_DETAIL_START,
  payload: {
    id,
  },
});

const downloadStageDetailSuccess = stage => ({
  type: DOWNLOAD_STAGE_DETAIL_SUCCESS,
  payload: {
    stage,
  },
});

const downloadStageDetailFailed = error => ({
  type: DOWNLOAD_STAGE_DETAIL_FAILED,
  payload: {
    error,
  },
});


const downloadLevelDetail = id => ({
  type: DOWNLOAD_LEVEL_DETAIL_START,
  payload: {
    id,
  },
});

const downloadLevelDetailSuccess = level => ({
  type: DOWNLOAD_LEVEL_DETAIL_SUCCESS,
  payload: {
    level,
  },
});

const downloadLevelDetailFailed = error => ({
  type: DOWNLOAD_LEVEL_DETAIL_FAILED,
  payload: {
    error,
  },
});

const initialState = {
  isLoading: null,
  error: null,
  stage: {},
  level: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_LEVEL_DETAIL_START:
    case DOWNLOAD_STAGE_DETAIL_START:
    case SUBMIT_LEVEL_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUBMIT_LEVEL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DOWNLOAD_LEVEL_DETAIL_SUCCESS: {
      const { level } = action.payload;
      return {
        ...state,
        level,
        isLoading: false,
      };
    }
    case DOWNLOAD_STAGE_DETAIL_SUCCESS: {
      const { stage } = action.payload;
      return {
        ...state,
        stage,
        isLoading: false,
      };
    }
    case DOWNLOAD_LEVEL_DETAIL_FAILED:
    case DOWNLOAD_STAGE_DETAIL_FAILED:
    case SUBMIT_LEVEL_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    case TRANSACTION_CLEAR: {
      return {
        ...state,
        isLoading: null,
        error: null,
      };
    }
    default:
      return state;
  }
}

export const actions = {
  submitLevell,
  submitLevellSuccess,
  submitLevellFailed,
  downloadStageDetail,
  downloadStageDetailSuccess,
  downloadStageDetailFailed,
  downloadLevelDetail,
  downloadLevelDetailSuccess,
  downloadLevelDetailFailed,
};

export const getStatus = ({ admin }) => admin.isLoading;
export const getLevel = ({ admin }) => admin.currentLevel;
export const getError = ({ admin }) => admin.error;
