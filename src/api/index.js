import Axios from 'axios';
import loginApi from './login_api';

import qs from 'qs';
const apis = { ...loginApi };
const ajax = Axios.create({
  // baseURL: ''
});

// request请求拦截器
const requestHandler = (req) => {
  // let token = window.sessionStorage.getItem('token')
  // if (token) {
  //   req.headers.token = token;
  // }
  return req;
};
const requestErrorHandler=(error) => {
  throw error;
};
const errorWhiteList = [] // 白名单
// response 相应拦截器
const responseHandler = (res) => {
  return res;
};
const responseErrorHandler = (error) => {
  throw error;
};
ajax.interceptors.request.use(requestHandler, requestErrorHandler);
ajax.interceptors.response.use(responseHandler, responseErrorHandler);

let apiFn = {
  getDefault: function (url, params) {
    return ajax.get(url, params);
  },
  postDefault: function (url, params) {
    return ajax.post(url, params);
  },
  putDefault: function(url, params) {
    return ajax.put(url, params);
  },
  deleteDeault: function(url, params) {
    return ajax.delete(url, params);
  }
};
Object.keys(apis).forEach((item) => {
  if (item.includes('post')) {
    apiFn[item] = (params, toCamelCase = false, withCredentials = true) => {
      return ajax.post(apis[item], params, { withCredentials, toCamelCase });
    };
  } else if (item.includes('put')) {
    apiFn[item] = (params, toCamelCase = false, withCredentials = true) => {
      return ajax.put(apis[item], params, { withCredentials, toCamelCase });
    };
  } else {
    apiFn[item] = (params, toCamelCase = false, withCredentials = true, contentType = {}) => {
      return ajax.get(apis[item], {
        params
      }, { withCredentials, toCamelCase, contentType });
    };
  }
});


// 请求promise的缓存
const requestCache = new Map();
// 同样的请求和参数，全局只请求一次
function getDataWithCache(url, params = {}) {
  let key = qs.stringify({
    url,
    ...params
  });
  if (requestCache.has(key)) {
    return requestCache.get(key);
  } else {
    let pro = ajax.get(url, params);
    requestCache.set(key, pro);
    return pro;
  }
}

function clearRequestCache() {
  requestCache.clear();
}

export { ajax, getDataWithCache, clearRequestCache };

export default apiFn;
