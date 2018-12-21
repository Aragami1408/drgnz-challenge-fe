let history = null;

export const setHistory = (his) => history = his;

export const goBack = () => history.goBack();
export const push = (path, stage) => history.push(path, stage);
export const replace = (path, stage) => history.replace(path, stage);

export default {
  goBack,
  push,
  replace,
};
