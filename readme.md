# ${XXXX}

> Vue单页应用模板

## 起步

``` bash
# 安装依赖
npm install

# 启动开发调试
npm run dev

# 编译构建
npm run build

# 单元测试
npm run karma
```

## 主要目录结构说明

├─test                       &emsp;&emsp;// 单元测试用例
|  ├─.eslintrc.js
|  ├─karma.conf.js
|  ├─unit
|  |  ├─home
|  |  |  └index.test.js
├─src                        
|  ├─app.vue
|  ├─index.js                &emsp;&emsp;// 项目入口文件
|  ├─store                   &emsp;&emsp;// vuex
|  |   └index.js 
|  ├─router                  &emsp;&emsp;// 路由
|  |   ├─index.js            &emsp;&emsp;// 路由脚本，包含路由拦截器
|  |   └routes.js            &emsp;&emsp;// 路由表，可在此配置项目路由
|  ├─pages                   &emsp;&emsp;// 项目页面目录，存放项目页面
|  |   ├─not_found           &emsp;&emsp;// 404页面
|  |   |     └index.vue
|  |   ├─login               &emsp;&emsp;// 登录相关页面
|  |   |   └index.vue
|  |   ├─home                &emsp;&emsp;// 首页
|  |   |  └index.vue
|  |   ├─error               &emsp;&emsp;// 错误页面
|  |   |   └index.vue
|  |   ├─........
|  ├─components              &emsp;&emsp;// 项目公共组件
|  |     ├─readme.md
|  |     ├─menu              &emsp;&emsp;// 导航菜单组件
|  |     |  ├─index.vue
|  |     |  └menu_data.js
|  ├─common                  &emsp;&emsp;// 项目公共方法/脚本
|  |   └readme.md
|  ├─assets                  &emsp;&emsp;// 静态资源存放目录
|  |   ├─readme.md
|  |   ├─style
|  |   |   ├─reset.css
|  |   |   └variables.scss
|  |   ├─img
|  |   |  └logo.png
|  |   ├─icon
|  |   |  └.gitkeep
|  ├─api                     &emsp;&emsp;// 项目api管理及公共请求方法
|  |  ├─index.js             &emsp;&emsp;// 公共请求方法，包含请求、响应拦截器
|  |  ├─login_api.js
|  |  └readme.md
├─dist                       &emsp;&emsp;// 构建产物
├─conf                       &emsp;&emsp;// webpack 配置
|  ├─index.html
|  ├─webpack.base.config.js
|  ├─webpack.dev.config.js
|  ├─webpack.prod.config.js
|  └webpack.test.config.js
├─build                      &emsp;&emsp;// webpack 构建脚本
|   ├─dev.js
|   ├─prod.js
|   └promiseWrapper.js

## 项目公共请求方法及API管理

> 公共请求方法基于第三方库 axios 封装

### API 管理

- 在/src/api 下新建js 文件存放api，并使用 ES Module 方式将api导出，例：

``` javascript
// src/api/myApi.js
export default {
	postApiOne: '/api/oauth/token',
	getApiOne: '/api/get/one'
}
```

- 在/src/api/index.js中导入并添加到api map 中

```javascript
// src/api/index.js
import myApi from './myApi';
const apis = { ...myApi };
```

- 在项目中使用（在任何页面及vue组件中都是如下使用方式）

```javascript
this.$api.postApiOne({...params}).then((res) => {
	console.log(res)
})

this.$api.getApiOne({...params}).then((res) => {
	console.log(res)
})

// 默认post请求方法
this.$api.postDefault({...params}).then((res) => {
	console.log(res)
})
// 默认get请求方法
this.$api.getDefault({...params}).then((res) => {
	console.log(res)
})
```

### 备注
- api.js中key 的命名规范：post请求以post开头，get请求以get开头
- 根据业务需要，请自行在/src/api/index.js中修改请求/响应拦截器

## 项目路由配置

在/src/router/routes.js中配置路由表

## 修改 webbpack 配置

在/conf目录下修改 webpack 配置
