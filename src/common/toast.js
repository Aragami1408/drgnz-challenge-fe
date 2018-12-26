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

export const failed = (msg) => {
  toast.error(msg, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

export const accepted = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};


const Toast = {
  success,
  warning,
  error,
  info,
  failed,
  accepted,
  defaultToast,
};

export default Toast;
