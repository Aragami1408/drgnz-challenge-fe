import axios from 'axios';

const apiUrl = 'https://drgnz-challenge-zkuefmyjwn.now.sh';
// authenticate path
const LOGIN_PATH = '/api/auth/login';
const REGISTER_PATH = '/api/auth/register';

const setDefaults = (defaults) => {
  Object.keys(defaults).forEach((key) => {
    axios.defaults[key] = defaults[key];
  });
};

const setToken = (token) => {
  const { headers } = axios.defaults;
  axios.defaults.headers = {
    ...headers,
    Authorization: `Token ${token}`,
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
        'Content-Type': 'application/json',
      },
      data: formData,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const register = async (optionalConfig = {}) => {
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
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const getNiceErrorMsg = (response) => {
  const { status, data } = response;

  if (status >= 500) {
    return 'Server is unreachable';
  }
  if (status >= 400) {
    if (data.message) return data.message;
    if (!data.token) return 'Wrong password';
  }
  return 'Unknown error';
};

const Api = {
  setDefaults,
  setToken,
  login,
  register,
  getNiceErrorMsg,
};

export default Api;
