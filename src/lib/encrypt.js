/**
 * 加密工具类
 */

import CryptoJS from "crypto-js";
//国产加密库国米算法
import CryptoSM from 'sm-crypto';

/**
 * 将对象转化为JSON字符串
 * @param {*} data  
 */
function object2string(data) {

}

/**
 * 加密过程：定义一把钥匙然后加密算法会根据钥匙进行加解密
 */

/** ----------------- AES 对称加密算法---------------- */

//对称钥匙
const AES_KEY = 'tanxi123456tanxi123456tanxi123456'

const AES = {
    /**
     * 加密
     * @param {*} data 
     * @returns 返回加密过后的字符串
     */
    encryptData: function(data) {
        //data转为CryptoJS可以处理的
        let utf8Data = CryptoJS.enc.Utf8.parse(object2string(data));
        //钥匙
        const key = CryptoJS.enc.Utf8.parse(AES_KEY);
        //指定加密模式和填充模式得到加密
        const encrypted = CryptoJS.AES.encrypt(utf8Data, key, {
            mode:CryptoJS.mode.ECB,
            padding:CryptoJS.pad.Pkcs7,
        });

        return encrypted.toString();
    },
    
    decryptData: function(data) {
        let words = CryptoJS.enc.Base64.parse(data);
        const key = CryptoJS.AES.decrypt( {ciphertext: words}, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }).toString(CryptoJS.enc.Utf8);
    }
}

/**
 * --------------- 国密加密算法 -----------------------
 */

const SM4_KEY = 'tanxi123456tanxi123456tanxi123456'

const SM4 = {
    encryptData: function (data) {
    
      let encryptData = CryptoSM.sm4.encrypt(object2string(data), SM4_KEY);
      return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encryptData));
    },
  
    decryptData: function (data) {
      let words = CryptoJS.enc.Base64.parse(data);
      let decode64Str = CryptoJS.enc.Utf8.stringify(words);
  
      return CryptoSM.sm4.decrypt(decode64Str, SM4_KEY);
    },
  };

  /** ----- 设置默认加密方式;修改改变量进行加密模式改变 ------ */
  const EncryptObject = SM4;

  /**
   * 暴露加密算法
   */
  export const encryptData = function(data) {
    return !data ? null : EncryptObject.encryptData(data);
  };

  export const decryptData = function (data) {
    return !data ? null : EncryptObject.decryptData(data);
  };