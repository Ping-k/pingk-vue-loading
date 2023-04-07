/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-04 16:11:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 09:37:37
 */
import LoadingB from './src/main.vue';

export default {
    install: (Vue) => {
        Vue.component(LoadingB.name, LoadingB);
    }
};