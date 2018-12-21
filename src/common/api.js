import axios from 'axios';

const apiUrl = 'https://drgnzchallenge-wpqqfujtiy.now.sh';
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

const login = async (optionalConfig = {}) => {
  try {
    const response = await axios({
      ...optionalConfig,
      method: 'POST',
      baseURL: apiUrl,
      url: LOGIN_PATH,
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

const Api = {
  setDefaults,
  setToken,
  login,
  register,
};

export default Api;
