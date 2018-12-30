import axios from 'axios';

// const apiUrl = 'https://drgnz-challenge-zkuefmyjwn.now.sh';
const apiUrl = 'http://localhost:3001';
// const apiUrl = 'https://drgnz-challenge-api.herokuapp.com';
// authenticate path
const LOGIN_PATH = '/api/auth/login';
const REGISTER_PATH = '/api/auth/register';
const STAGE_PATH = '/api/stage';
const LEVEL_PATH = '/api/level';
const USER_PATH = '/api/user';
const SUBMISSION_PATH = '/api/submit';

const setDefaults = (defaults) => {
  Object.keys(defaults).forEach((key) => {
    axios.defaults[key] = defaults[key];
  });
};

const setToken = (token) => {
  const { headers } = axios.defaults;
  axios.defaults.headers = {
    ...headers,
    'x-access-token': token,
  };
};


/* eslint-disable camelcase */

const login = async (formData, optionalConfig = {}) => {
  try {
    // const request = await axios.post(`${apiUrl}${LOGIN_PATH}`, formData);
    const response = await axios({
      ...optionalConfig,
      method: 'POST',
      baseURL: apiUrl,
      url: LOGIN_PATH,
      headers: {
        ...(axios.defaults.headers || {}),
        'Content-Type': 'application/json',
      },
      data: formData,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const register = async (formData, optionalConfig = {}) => {
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'POST',
      baseURL: apiUrl,
      url: REGISTER_PATH,
      headers: {
        ...(axios.defaults.headers || {}),
        'Content-Type': 'application/json',
      },
      data: formData,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const downloadStages = async (optionalConfig = {}) => {
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'GET',
      baseURL: apiUrl,
      url: STAGE_PATH,
      headers: {
        ...(axios.defaults.headers || {}),
        'Content-Type': 'application/json',
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const downloadStageDetail = async (id, optionalConfig = {}) => {
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'GET',
      baseURL: apiUrl,
      url: `${STAGE_PATH}/${id}`,
      headers: {
        ...(axios.defaults.headers || {}),
        'Content-Type': 'application/json',
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const downloadLevelDetail = async (id, optionalConfig = {}) => {
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'GET',
      baseURL: apiUrl,
      url: `${LEVEL_PATH}/${id}`,
      headers: {
        ...(axios.defaults.headers || {}),
        'Content-Type': 'application/json',
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const submitFlag = async (formData, optionalConfig = {}) => {
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'POST',
      baseURL: apiUrl,
      url: SUBMISSION_PATH,
      headers: {
        ...(axios.defaults.headers || {}),
        'Content-Type': 'application/json',
      },
      data: formData,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const getNiceErrorMsg = (response) => {
  const { status, data } = response || {};

  if (!status) return 'Unknown error occurred!';

  if (status >= 500) {
    return 'Server is unreachable';
  }
  if (status === 401) return 'Unauthorized';
  if (status >= 400) {
    if (data.message) return data.message;
    if (!data.token) return 'Wrong password';
  }
  return 'Unknown error';
};

const getUserDetail = async (id, token, optionalConfig = {}) => {
  const headers = {
    ...(axios.defaults.headers || {}),
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['x-access-token'] = token;
  }
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'GET',
      baseURL: apiUrl,
      url: `${USER_PATH}/${id}`,
      headers,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const updateUserInformation = async (id, user, optionalConfig = {}) => {
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'PUT',
      baseURL: apiUrl,
      url: `${USER_PATH}/${id}`,
      headers: {
        ...(axios.defaults.headers || {}),
        'Content-Type': 'application/json',
      },
      data: {
        ...user,
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const submitNewLevel = async (formData, optionalConfig = {}) => {
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'POST',
      baseURL: apiUrl,
      url: LEVEL_PATH,
      headers: {
        ...(axios.defaults.headers || {}),
        'Content-Type': 'application/json',
      },
      data: formData,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const Api = {
  setDefaults,
  setToken,
  login,
  register,
  getNiceErrorMsg,
  downloadStages,
  downloadStageDetail,
  downloadLevelDetail,
  getUserDetail,
  submitFlag,
  updateUserInformation,
  submitNewLevel,
};

export default Api;
