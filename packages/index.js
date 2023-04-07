/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-04 16:14:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 09:57:03
 */
import LoadingA from './LoadingA/index.js';
import LoadingB from './LoadingB/index.js';

const components = [
    LoadingA, LoadingB
]

export default {
    install: (Vue) => {
        components.forEach(component => {
            Vue.use(component);
        })
    }
};
