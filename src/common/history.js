let history = null;
let router = null;

export const setHistory = his => history = his; // eslint-disable-line
export const setRouter = rout => router = rout; // eslint-disable-line

export const goBack = () => history.goBack();
export const push = (path, stage) => history.push(path, stage);
export const replace = (path, stage) => history.replace(path, stage);

export const checkExistance = () => !!history && !!router;
export const getHistory = () => history;
export const getRouter = () => router;

export default {
  goBack,
  push,
  replace,
  getHistory,
  getRouter,
};
