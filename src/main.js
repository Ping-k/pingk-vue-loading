/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-04 17:16:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 16:21:29
 */
import { createApp } from 'vue'
import App from './App.vue'

// 1、手动引入组件并安装
// import LoadingA from '../packages/LoadingA/src/main.vue'
// const MyPlugin = {
//     install(Vue) {
//         // 注册全局组件：Vue.component('组件名', 组件对象)
//         Vue.component('LoadingA', LoadingA)
//     }
// }

// 2、引入组件
// import LoadingA from '../packages/LoadingA/index'

// 3、引入组件库
import MyModule from '../packages/index'


import 'ant-design-vue/dist/antd.css';
import { Button, message } from 'ant-design-vue';

let app = createApp(App);

// app.use(MyPlugin);

// app.use(LoadingA);

app.use(MyModule);

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button);

app.config.globalProperties.$message = message;

app.mount('#app');
