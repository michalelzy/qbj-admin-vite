/**
 * http网络请求
 * 
 */
import { message, Modal} from 'ant-design-vue';
import axios from 'axios';
import { localClear, localRead } from '/@/utils/local-util';
import { decryptData, encryptData } from './encrypt';
import { DATA_TYPE_ENUM } from '../constants/common-const';
import _ from 'lodash';
import localStorageKeyConst from '../constants/local-storage-key-const';

//http请求头带token的请求字段，客户端在后续请求中带入token访问服务器
const TOKEN_HEADER = 'x-access-token';

//创建axios对象
const smartAxios = axios.create({
    //根据编译模式动态创建URL
    baseURL:import.meta.env.VITE_APP_API_URL,
})

//退出系统
function logout() {
    localClear();
    location.href = '/';
  }

/** -------------------- -----------------------请求拦截器---------------- ----------------------*/

/**
 * 向axios添加请求拦截器处理请求发送前和错误
 */
smartAxios.interceptors.request.use(
    //请求发送前向消息头中加入token
    (config) => {
        const token = localRead(localStorageKeyConst.USER_TOKEN);
        if (token) {
            config.headers[TOKEN_HEADER] = token;
        } else {
            delete config.headers[TOKEN_HEADER];
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

/** ----------------------------------------响应拦截器----------------------------------- */

/**
 * 向axios添加响应拦截器处理响应前和错误
 */
smartAxios.interceptors.use(
    (response) => {
        //根据返回值中的content-type判断返回值是否为json
        let contentType = response.headers['content-type'] ? response.headers['content-type'] : response.headers['Content-Type'];
        //响应不是JSON格式而可能是XML、HTML或者其他
        if (contentType.indexOf('application/json') === -1) {
            //即使不是JSON格式也继续传递response到后续链条进行调用
            return Promise.resolve(response);
        }
        //是Blob类型
        if (response.data && response.data instanceof Blob) {
            return Promise.reject(response.data);
        }
        //是加密数据
        if (response.data.dataType === DATA_TYPE_ENUM.ENCRYPT.value) {
            response.data.encryptData = response.data.data;
            //解码
            let decryptStr = decryptData(response.data.data);
            if (decryptStr) {
                response.data.data = JSON.parse(decryptStr);
            }
        }

        const res = response.data;
        if (res.code && res.code !== 1) {
            //30007和30008错误代码指代`token`过期或者已在别处登录
            if (res.code === 30007 || res.code === 30008) {
                message.destroy();
                //类似alert弹出消息提出
                message.error('未登录，请重新登陆');
                setTimeout(logout, 300);
            }
        }
    },

    (error) => {

    }
);

/**
 * 该模块向外部提供网络请求方法
 *
 */

/**
 * Get 请求
 * @param {*} url 
 * @param {*} params 
 */
export const getRequest = (url, params) => {
    return request({ 
        url,
        method: 'get',
        params,
    })
}

/**
 * 配置项发起网络请求
 * @param config 配置项对象
 */
export const request = (config) => {
    return smartAxios.request(config);
}

export const postRequest = (url, data) => {
    return request({
        data, 
        url, 
        method: 'post',
    })
}

/** ------------------------------------加密 请求 ------------------------------ */
export const postEncryptRequest = (url, data) => {
    return request({
      data: { encryptData: encryptData(data) },
      url,
      method: 'post',
    });
  };

/** ----------------------------------封装下载方法------------------------------ */

/**
 * post方法下载大文件
 */
export const postDownload = function (url, data) {
    request({
        method: 'post', 
        url, 
        data,
        responseType: 'blob', //二进制大对象blob发起下载
    }).then((data) => {
        handleDownloadData(data);
    }).catch((error) => {
        handleDownloadError(error);
    });
}

/**
 * get方法下载大文件
 * @param {*} url 
 * @param {*} params 
 */
export const getDownload = function (url, params) {

}

function handleDownloadData() {

}

function handleDownloadError() {

}

