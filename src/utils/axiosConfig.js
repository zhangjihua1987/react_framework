import axios from 'axios';
import CONF from '../config'
import { Modal } from "antd";

const env = process.env.NODE_ENV;
const origin = window.location.origin;
const host = env === 'production' ? origin : CONF.host;

const instance = axios.create({
    //当创建实例的时候配置默认配置
    baseURL:host,
    timeout: 60000,
    withCredentials:false,
});

instance.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//添加请求拦截器
instance.interceptors.request.use((config)=>{
    // config.headers['AUTHORIZATION']= `bearer ${localStorage.getItem('access_token')}`;
    config.headers['authorization']= `bearer ${localStorage.getItem('access_token')}`;
    if(!localStorage.getItem('access_token') && config.url.indexOf('login') === -1){
        window.location.href = CONF.loginUrl
    }
    return config;
},(error)=>{
    //请求错误时做些事
    return Promise.reject(error);
});

//添加一个响应拦截器
instance.interceptors.response.use((config)=> {
    // 请求成功
    let response = config.data;
    return response
}, (error)=> {
    let detail = error.response.data.detail
    if(error.response.status === 403){
        Modal.error({
            title:'提示',
            content:'登录失效，需要重新登录',
            okText:'知道了',
            onOk:()=>{
                window.location.href = CONF.loginUrl
            }
        })
    } else if(error.response.status >= 500){
        Modal.error({
            title:'提示',
            content:'服务器忙，请稍后重试',
            okText:'知道了',
        })
    }
    // else{
    // // if(detail === "身份认证信息未提供。" || detail === 'token invalid' || detail === 'token empty'){
    //     Modal.error({
    //         title:'提示',
    //         content:'登录出错，需要重新登录',
    //         okText:'知道了',
    //         onOk:()=>{
    //             window.location.href = CONF.loginUrl
    //         }
    //     })
    // }
    console.log(error,error.response)
    console.log('==-=-=-=-=-=')
    // 请求失败
    return Promise.reject(error.response);
});

export default instance;