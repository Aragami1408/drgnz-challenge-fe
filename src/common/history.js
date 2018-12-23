let history = null;
let router = null;

export const setHistory = his => history = his;
export const setRouter = rout => router = rout;

export const goBack = () => history.goBack();
export const push = (path, stage) => history.push(path, stage);
export const replace = (path, stage) => history.replace(path, stage);

export const checkExistance = () => !!history && !!router;

export default {
  goBack,
  push,
  replace,
};
