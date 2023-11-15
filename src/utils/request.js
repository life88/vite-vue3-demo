import axios from 'axios';
import { ElMessage as message } from 'element-plus';

const errorCodeMapping = {
  404: '请求地址不存在',
  500: '服务器内部错误',
  502: '网关错误',
  504: '网关超时',
};

/**
 * 處理特殊情況的 baseUrl
 * @returns {string}
 */
export function getBaseUrl() {
  let VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL || '';
  if (
    VITE_APP_BASE_URL &&
    !VITE_APP_BASE_URL.startsWith('http://') &&
    !VITE_APP_BASE_URL.startsWith('https://') &&
    !VITE_APP_BASE_URL.startsWith('//')
  ) {
    VITE_APP_BASE_URL = `${window.location.protocol}${VITE_APP_BASE_URL}`;
  }
  return `${VITE_APP_BASE_URL}${import.meta.env.VITE_APP_PREFIX_API || ''}`;
}

/**
 * 请求地址前缀
 * @type {string}
 */
export const baseUrl = getBaseUrl();

axios.interceptors.request.use(
  (config) => {
    config.url = config.url && /^https?:\/\//.test(config.url) ? config.url : `${baseUrl}${config.url}`;
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

let preErrorCode = -1;

function errorHandler(code, msg, config) {
  if (!code || !msg || !config) return;
  const { skipHandlerError = false } = config;
  if (!skipHandlerError) {
    const key = `${code}-${msg}`;
    if (preErrorCode > 0 && preErrorCode !== code) {
      preErrorCode = code;
    } else {
    }
    message.error({
      content: msg,
      key,
    });
  }
}

axios.interceptors.response.use(
  (response) => {
    const { status, data, config } = response;
    if (status === 200) {
      return response;
    }
    errorHandler(data?.code, data?.msg, config);
    return Promise.reject(data);
  },
  (error) => {
    const { code } = error;
    const config = error.config;
    const { status, data } = error.response || {};
    const { error: errMsg } = data || {};
    let msg = '请求数据异常';
    if (code === 'ERR_NETWORK') {
      msg = '网络或服务器异常';
    }
    errorHandler(-1, errorCodeMapping[status] ?? errMsg ?? msg, config);
    return Promise.reject(error);
  },
);

async function request(url, config) {
  if (typeof url === 'object') {
    config = url;
    url = config.url;
  }
  config.headers = Object.assign({}, config.headers, {
    'X-Requested-With': 'XMLHttpRequest',
  });

  // 设置请求 token
  const token = localStorage.getItem('LOGIN_USER_TOKEN_KEY');
  if (token) {
    config.headers.token = token;
  }

  const { data } = await axios({
    url,
    ...config,
  });
  return data;
}

export default request;
