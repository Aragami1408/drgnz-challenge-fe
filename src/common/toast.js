import { toast } from 'react-toastify';

export const success = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const warning = (msg) => {
  toast.warn(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const error = (msg) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const info = (msg) => {
  toast.info(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const defaultToast = (msg) => {
  toast(msg, {
    position: toast.POSITION.TOP_RIGHT,
    className: 'toast-dark',
  });
};

const Toast = {
  success,
  warning,
  error,
  info,
  defaultToast,
};

export default Toast;
