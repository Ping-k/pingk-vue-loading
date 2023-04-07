<!--
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-07 09:59:31
 * @LastEditors: 
 * @LastEditTime: 2023-04-07 10:16:01
-->
# pingk-vue-loading

# 使用教程
```
// 1、安装
npm i pingk-vue-loading  

// 2、全局安装
import MyModule from 'pingk-vue-loading'  
import 'pingk-vue-loading/lib/pingk-vue-loading.css'  

let app = createApp(App);  

app.use(MyModule);  

app.mount('#app');  

// 3、使用：App.vue
<LoadingA></LoadingA>
<LoadingB></LoadingB>


// 4、第三方依赖使用：antdv

安装：npm i --save ant-design-vue

import 'ant-design-vue/dist/antd.css';
import { Button, message } from 'ant-design-vue';

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button);

app.config.globalProperties.$message = message;



```

## 示例
[test](https://github.com/Ping-k/my-vue3-test)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
