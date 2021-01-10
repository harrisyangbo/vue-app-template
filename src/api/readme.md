## 项目公共请求方法及API管理

> 公共请求方法基于第三方库 axios 封装

### API 管理

- 在/src/api 下新建js 文件存放api，并使用 ES Module 方式将api导出，例：

``` javascript
// src/api/myApi.js
export default {
	postApiOne: '/api/post/one',
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