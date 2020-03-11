(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! exports provided: chunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return chunk; });\n\r\nfunction chunk(array,size=1){\r\n  const bigArr = []\r\n  let smallArr = []\r\n\r\n  if (array.length===0) {\r\n    return bigArr\r\n  }\r\n\r\n  if(size<1){\r\n    size = 1\r\n  }else if (size > array.length) {\r\n    size = array.length\r\n  }\r\n\r\n  array.forEach((item)=>{\r\n    if(smallArr.length===0){\r\n      bigArr.push(smallArr)\r\n    }\r\n    smallArr.push(item)\r\n    if(smallArr.length===size){\r\n      smallArr = []\r\n    }\r\n  })\r\n  return bigArr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/*! exports provided: compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return compact; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n\r\n\r\n\r\nfunction compact(array){\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(array, item => item);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return concat; });\nfunction concat(array, ...values){\r\n  const arr = [...array]\r\n\r\n  values.forEach(value => {\r\n    if(Array.isArray(value)){\r\n      arr.push(...value)\r\n    } else {\r\n      arr.push(value)\r\n    }\r\n  })\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/*! exports provided: map, reduce, filter, find, findIndex, every, some */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return reduce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return findIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return every; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n\r\nfunction map(array, callback) {\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    arr.push(result)\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction reduce(array,callback,initValue) {\r\n  let total = initValue\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    total = callback(total,element,index)\r\n  }\r\n  return total\r\n}\r\n\r\nfunction filter(array,callback) {\r\n  const arr = []\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (result) {\r\n      arr.push(element)\r\n    }\r\n  }\r\n  return arr\r\n}\r\n\r\nfunction find(array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (result) {\r\n      return element\r\n    }\r\n  }\r\n  return undefined\r\n}\r\n\r\nfunction findIndex(array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (result) {\r\n      return index\r\n    }\r\n  }\r\n  return -1\r\n}\r\n\r\nfunction every(array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (!result) {\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}\r\n\r\nfunction some(array,callback) {\r\n  for (let index = 0; index < array.length; index++) {\r\n    const element = array[index];\r\n    const result = callback(element,index)\r\n    if (result) {\r\n      return true\r\n    }\r\n  }\r\n  return false\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/*! exports provided: difference, differences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return difference; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return differences; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n\r\n\r\n\r\nfunction difference(arr1, arr2){\r\n  if (arr1.length===0) {\r\n    return []\r\n  }\r\n  if (arr2.length===0) {\r\n    return [...arr1]\r\n  }\r\n\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(arr1, item => arr2.indexOf(item)===-1)\r\n}\r\n\r\n\r\n\r\nfunction differences(arr1, ...arrays){\r\n  if (arr1.length===0) {\r\n    return []\r\n  } else if (arr2.length===0) {\r\n    return [...arr1]\r\n  }\r\n\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(arr1, item => {\r\n    let result = true  //假设当前元素在后面的所有数组都不存在\r\n    for(let index = 0; index < arrays.length; index++){\r\n      const array = arrays[index]\r\n      if(array.indexOf(item) !== -1){\r\n        result = false\r\n        break \r\n      }\r\n    }\r\n    return result\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop_dropRight.js":
/*!*************************************!*\
  !*** ./src/array/drop_dropRight.js ***!
  \*************************************/
/*! exports provided: drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return dropRight; });\nfunction drop (array, count=1){\r\n  if(array.length === 0){\r\n    return []\r\n  }\r\n  if(count < 1){\r\n    count = 1\r\n  }\r\n  return array.filter((item,index) => index >= count)\r\n}\r\n\r\n\r\nfunction dropRight (array, count=1){\r\n  if(array.length === 0){\r\n    return []\r\n  }\r\n  if(count < 1){\r\n    count = 1\r\n  }\r\n  return array.filter((item,index) => index < array.length - count)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/drop_dropRight.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/*! exports provided: flatten1, flatten2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return flatten1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return flatten2; });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n\r\n/* 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4] */\r\n\r\n\r\n\r\n// 方法一: 递归 + reduce() + concat()\r\nfunction flatten1 (array) {\r\n  return Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"reduce\"])(array, (pre,item) => {\r\n    if(!Array.isArray(item)){\r\n      pre.push(item)\r\n    } else {\r\n      pre = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])(pre, flatten1(item))\r\n    }\r\n    return pre\r\n  }, [])\r\n}\r\n\r\n\r\n// 方法二: ... + some() + concat()\r\nfunction flatten2 (array) {\r\n  let arr = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])([], ...array)\r\n  while(Object(_declares__WEBPACK_IMPORTED_MODULE_0__[\"some\"])(arr, item => Array.isArray(item))){\r\n    arr = Object(_concat__WEBPACK_IMPORTED_MODULE_1__[\"concat\"])([], ...arr)\r\n  }\r\n\r\n  return arr\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/mergeArray.js":
/*!*********************************!*\
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/*! exports provided: mergeArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return mergeArray; });\nfunction mergeArray(array, ...arrays){\r\n  const result = [...array]\r\n  if(arrays.length === 0){\r\n    return result\r\n  }\r\n\r\n  arrays.forEach(itemArr => {\r\n    itemArr.forEach(item => {\r\n      if(result.indexOf(item) === -1){\r\n        result.push(item)\r\n      }\r\n    })\r\n  })\r\n\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull_pullAll.js":
/*!***********************************!*\
  !*** ./src/array/pull_pullAll.js ***!
  \***********************************/
/*! exports provided: pull, pullAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return pullAll; });\nfunction pull(array, ...values){\r\n  const result = []\r\n  for(let index = 0; index < array.length; index++){\r\n    const item = array[index]\r\n    if (values.indexOf(item) !== -1) {\r\n      array.splice(index, 1)\r\n      result.push(item)\r\n      index--\r\n    }\r\n  }\r\n\r\n  return result\r\n}\r\n\r\nfunction pullAll(array, values){\r\n  return pull(array, ...values)\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/pull_pullAll.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n\r\n/* \r\n语法: var new_array = slice(array, [begin[, end]])\r\n功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\r\n*/\r\n\r\nfunction slice(array, begin, end){\r\n  const arr = []\r\n\r\n  if(array.length === 0){\r\n    return arr\r\n  }\r\n\r\n  //处理没有指定\r\n  begin = begin || 0\r\n  end = end || array.length\r\n\r\n  //范围限制\r\n  if(begin < 0){\r\n    begin = 0\r\n  }\r\n  if(end > array.length){\r\n    end = array.length\r\n  }\r\n\r\n  for(let index = begin; index < end; index++){\r\n    arr.push(array[index])\r\n  }\r\n\r\n  return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/*! exports provided: unique1, unique2, unique3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return unique1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return unique2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return unique3; });\n//数组去重\r\n\r\n// 方法1: 利用forEach()和indexOf()\r\n// 说明: 本质是双重遍历, 效率差些\r\nfunction unique1(array){\r\n  const arr = []\r\n  array.forEach(item => {\r\n    if(arr.indexOf(item) === -1){  //内部包含隐式遍历\r\n      arr.push(item)\r\n    }\r\n  })\r\n\r\n  return arr\r\n}\r\n\r\n// 方法2: 利用forEach() + 对象容器\r\n// 说明: 只需一重遍历, 效率高些\r\nfunction unique2(array){\r\n  const arr = []\r\n  const contain = {}  // 属性名是item, 属性值true\r\n  array.forEach(item => {\r\n    if(!contain.hasOwnProperty(item)){\r\n      arr.push(item)\r\n      contain[item] = true\r\n    }\r\n  })\r\n  return arr\r\n}\r\n\r\n// 方法3: 利用ES6语法: from + Set 或者 ... + Set\r\n// 说明: 编码简洁\r\nfunction unique3(array){\r\n  // return Array.from(new Set(array))\r\n\r\n  return [...new Set(array)]\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \n  1. 函数的返回值为promise, 成功的结果为response, 失败的结果为error\n  2. 能处理多种类型的请求: GET/POST/PUT/DELETE\n  3. 函数的参数为一个配置对象\n      {\n        url: '',   // 请求地址\n        method: '',   // 请求方式GET/POST/PUT/DELETE\n        params: {},  // GET/DELETE请求的query参数\n        data: {}, // POST或DELETE请求的请求体参数 \n      }\n  4. 响应json数据自动解析为js的对象/数组\n*/\n/* 发送任意类型请求的函数 */\nfunction axios({\n  url,\n  method='GET',\n  params={},\n  data={}\n}) {\n  // 返回一个promise对象\n  return new Promise((resolve, reject) => {\n\n    // 处理method(转大写)\n    method = method.toUpperCase()\n\n    // 处理query参数(拼接到url上)   id=1&xxx=abc\n    /* \n    {\n      id: 1,\n      xxx: 'abc'\n    }\n    */\n    let queryString = ''\n    Object.keys(params).forEach(key => {\n      queryString += `${key}=${params[key]}&`\n    })\n    if (queryString) { // id=1&xxx=abc&\n      // 去除最后的&\n      queryString = queryString.substring(0, queryString.length-1)\n      // 接到url\n      url += '?' + queryString\n    }\n\n\n    // 1. 执行异步ajax请求\n    // 创建xhr对象\n    const request = new XMLHttpRequest()\n    // 打开连接(初始化请求, 没有请求)\n    request.open(method, url, true)\n\n    // 发送请求\n    if (method==='GET') {\n      request.send()\n    } else if (method==='POST' || method==='PUT' || method==='DELETE'){\n      request.setRequestHeader('Content-Type', 'application/json;charset=utf-8') // 告诉服务器请求体的格式是json\n      request.send(JSON.stringify(data)) // 发送json格式请求体参数\n    }\n\n    // 绑定状态改变的监听\n    request.onreadystatechange = function () {\n      // 如果请求没有完成, 直接结束\n      if (request.readyState!==4) {\n        return\n      }\n      // 如果响应状态码在[200, 300)之间代表成功, 否则失败\n      const {status, statusText} = request\n      // 2.1. 如果请求成功了, 调用resolve()\n      if (status>=200 && status<=299) {\n        // 准备结果数据对象response\n        const response = {\n          data: JSON.parse(request.response),\n          status,\n          statusText\n        }\n        resolve(response)\n      } else { // 2.2. 如果请求失败了, 调用reject()\n        reject(new Error('request error status is ' + status))\n      }\n    }\n  })\n}\n\n/* 发送特定请求的静态方法 */\naxios.get = function (url, options) {\n  return axios(Object.assign(options, {url, method: 'GET'}))\n}\naxios.delete = function (url, options) {\n  return axios(Object.assign(options, {url, method: 'DELETE'}))\n}\naxios.post = function (url, data, options) {\n  return axios(Object.assign(options, {url, data, method: 'POST'}))\n}\naxios.put = function (url, data, options) {\n  return axios(Object.assign(options, {url, data, method: 'PUT'}))\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios);\n\n//# sourceURL=webpack://aUtils/./src/axios/index.js?");

/***/ }),

/***/ "./src/da/priority-queue.js":
/*!**********************************!*\
  !*** ./src/da/priority-queue.js ***!
  \**********************************/
/*! exports provided: PriorityQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PriorityQueue\", function() { return PriorityQueue; });\nfunction PriorityQueue(){\r\n  const arr = []\r\n\r\n  //队列每个元素的类型\r\n  function QueueElement(data, priority) {\r\n    this.data = data\r\n    this.priority = priority\r\n  }\r\n\r\n  this.enqueue = function(data, priority){\r\n    if(priority<0 || priority>100){\r\n      throw new Error('优先级必须在1到100之间')\r\n    }\r\n\r\n    //创建一个新的元素\r\n    const element = new QueueElement(data, priority)\r\n    // 如果当前是空的, 直接添加\r\n    if(arr.length === 0){\r\n      arr.push(element)\r\n    } else {  // 将当前element插入到arr中的一个合适: 在priority值大于当前值的左边\r\n      for(let index = 0; index < arr.length; index++){\r\n        if(arr[index].priority > priority){\r\n          arr.splice(index, 0, element)\r\n          return\r\n        }\r\n      }\r\n      //当前要添加的priority是最大的\r\n      arr.push(element)\r\n    }\r\n\r\n    \r\n  }\r\n\r\n  this.dequeue = function(){\r\n    return arr.shift()\r\n  }\r\n\r\n  this.front = function(){\r\n    return arr[0]\r\n  }\r\n\r\n  this.size = function(){\r\n    return arr.length\r\n  }\r\n\r\n  this.isEmpty = function(){\r\n    return arr.length === 0\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/da/priority-queue.js?");

/***/ }),

/***/ "./src/da/queue.js":
/*!*************************!*\
  !*** ./src/da/queue.js ***!
  \*************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return Queue; });\n/* \r\n  入队列: enqueue()\r\n  出队列: dequeue()\r\n  查看队头: front()\r\n  查看元素的个数: size()\r\n  判断队列是否为空: isEmpty() \r\n*/\r\n\r\nfunction Queue () {\r\n  const arr = []\r\n\r\n  this.enqueue = function(element){\r\n    arr.push(element)\r\n  }\r\n\r\n  this.dequeue = function(){\r\n    return arr.shift()\r\n  }\r\n\r\n  this.front = function(){\r\n    return arr[0]\r\n  }\r\n\r\n  this.size = function(){\r\n    return arr.length\r\n  }\r\n\r\n  this.isEmpty = function(){\r\n    return arr.length === 0\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/da/queue.js?");

/***/ }),

/***/ "./src/da/sort.js":
/*!************************!*\
  !*** ./src/da/sort.js ***!
  \************************/
/*! exports provided: BubbleSort, SelectSort, InsertSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BubbleSort\", function() { return BubbleSort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SelectSort\", function() { return SelectSort; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InsertSort\", function() { return InsertSort; });\n\r\n// 冒泡排序\r\nfunction BubbleSort(arr){\r\n  for (let i = 0; i < arr.length-1; i++) {\r\n    for (let j = 0; j < arr.length-1-i; j++) {\r\n      if (arr[j] > arr[j+1]) {\r\n        let temp = arr[j]\r\n        arr[j] = arr[j+1]\r\n        arr[j+1] = temp\r\n      }\r\n    }\r\n  }\r\n  return arr\r\n}\r\n    \r\n//选择排序\r\nfunction SelectSort(arr){\r\n  for(let i = 0; i < arr.length - 1; i++){\r\n    let minIndex = i\r\n    for(let j = i+1; j < arr.length; j++){\r\n      if(arr[j] < arr[minIndex]){\r\n        minIndex = j\r\n      }\r\n    }\r\n    if(minIndex !== i){\r\n      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]\r\n    }\r\n  }\r\n  return arr\r\n}\r\n\r\n//插入排序\r\nfunction InsertSort(arr){\r\n  for(let i=1; i < arr.length; i++){\r\n    let start = arr[i]\r\n    let j\r\n    for(j=i-1; j >= 0; j--){\r\n      if(start < arr[j]){\r\n        arr[j+1] = arr[j]\r\n      } else {\r\n        break;\r\n      }\r\n    }\r\n    arr[j+1] = start\r\n\r\n    /* let j = i - 1\r\n    while(arr[j] > start && arr[j] > 0){\r\n      arr[j+1] = arr[j]\r\n      j--\r\n    }\r\n    arr[j+1] = start */\r\n\r\n  }\r\n  return arr\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/da/sort.js?");

/***/ }),

/***/ "./src/da/stack.js":
/*!*************************!*\
  !*** ./src/da/stack.js ***!
  \*************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return Stack; });\n/* \r\n  压栈：push()\r\n  出栈：pop()\r\n  查看栈顶：peek()\r\n  查看栈中元素的个数: size()\r\n  判断是否为空栈: isEmpty() \r\n*/\r\n\r\nfunction Stack () {\r\n  const arr = []\r\n\r\n  this.push = function(element){\r\n    arr.push(element)\r\n  }\r\n\r\n  this.pop = function(){\r\n    return arr.pop()\r\n  }\r\n\r\n  this.peek = function(){\r\n    return arr[arr.length - 1]\r\n  }\r\n\r\n  this.size = function(){\r\n    return arr.length\r\n  }\r\n\r\n  this.isEmpty = function(){\r\n    return arr.length === 0\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/da/stack.js?");

/***/ }),

/***/ "./src/event-bus/index.js":
/*!********************************!*\
  !*** ./src/event-bus/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst eventBus = {}\n\n/* \n{\n  add:  [callback1, callback2]\n  delete: [callback3]\n}\n*/\nlet callbacksObj = {}\n\n/* \n绑定事件监听\n*/\neventBus.on = function (eventName, callback) {\n  const callbacks = callbacksObj[eventName]\n  if (callbacks) {\n    callbacks.push(callback)\n  } else {\n    callbacksObj[eventName] = [callback]\n  }\n}\n\n/* \n分发事件\n*/\neventBus.emit = function (eventName, data) {\n  const callbacks = callbacksObj[eventName]\n  if (callbacks && callbacks.length > 0) {\n    callbacks.forEach(callback => {\n      callback(data)\n    })\n  }\n}\n\n/* \n移除事件监听\n*/\neventBus.off = function (eventName) {\n  if (eventName) {\n    delete callbacksObj[eventName]\n  } else {\n    callbacksObj = {}\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventBus);\n\n//# sourceURL=webpack://aUtils/./src/event-bus/index.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/*! exports provided: apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return apply; });\nfunction apply(fn, obj, args){\r\n  if(obj === undefined || obj === null){\r\n    obj = window\r\n  }\r\n  obj.tempFn = fn  //给obj添加tempFn方法\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn  //删除obj上的tempFn\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\r\n\r\n\r\nfunction bind(fn, obj, ...args){\r\n  //返回一个新函数\r\n  return (...args2) => {\r\n    return Object(_call__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn,obj, ...args, ...args2)\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return call; });\nfunction call(fn, obj, ...args){\r\n  if(obj === undefined || obj === null){\r\n    obj = window\r\n  }\r\n  obj.tempFn = fn  //给obj添加tempFn方法\r\n  const result = obj.tempFn(...args)\r\n  delete obj.tempFn  //删除obj上的tempFn\r\n  return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n\r\n//自定义防抖\r\nfunction debounce(callback,delay) {\r\n  return function (event) {\r\n    if (callback.hasOwnProperty('timer')) {\r\n      clearTimeout(callback.timer)\r\n    }\r\n    callback.timer = setTimeout(()=>{\r\n      callback.call(this,event)  //正在处理事件\r\n      delete callback.timer  //删除准备处理的标记\r\n    },delay)\r\n  }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n//自定义节流\r\nfunction throttle(callback, delay) {\r\n  let pre = 0\r\n  return function (event) {\r\n    // console.log('事件throttle');\r\n    let current = Date.now()\r\n    if(current-pre > delay){\r\n      callback.call(this, event)\r\n      pre = current\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: apply, call, bind, throttle, debounce, map, reduce, filter, find, findIndex, every, some, compact, concat, chunk, difference, differences, mergeArray, pull, pullAll, drop, dropRight, flatten1, flatten2, slice, unique1, unique2, unique3, newInstance, myInstanceOf, mergeObject, clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4, reverseString, palindrome, truncate, axios, eventBus, Promise, PubSub, Stack, Queue, PriorityQueue, BubbleSort, SelectSort, InsertSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"apply\", function() { return _function_apply__WEBPACK_IMPORTED_MODULE_0__[\"apply\"]; });\n\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return _function_call__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return _function_bind__WEBPACK_IMPORTED_MODULE_2__[\"bind\"]; });\n\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return _function_throttle__WEBPACK_IMPORTED_MODULE_3__[\"throttle\"]; });\n\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return _function_debounce__WEBPACK_IMPORTED_MODULE_4__[\"debounce\"]; });\n\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"map\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reduce\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"reduce\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"find\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"findIndex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"every\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"every\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return _array_declares__WEBPACK_IMPORTED_MODULE_5__[\"some\"]; });\n\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compact\", function() { return _array_compact__WEBPACK_IMPORTED_MODULE_6__[\"compact\"]; });\n\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"concat\", function() { return _array_concat__WEBPACK_IMPORTED_MODULE_7__[\"concat\"]; });\n\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chunk\", function() { return _array_chunk__WEBPACK_IMPORTED_MODULE_8__[\"chunk\"]; });\n\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"difference\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_9__[\"difference\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"differences\", function() { return _array_difference__WEBPACK_IMPORTED_MODULE_9__[\"differences\"]; });\n\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeArray\", function() { return _array_mergeArray__WEBPACK_IMPORTED_MODULE_10__[\"mergeArray\"]; });\n\n/* harmony import */ var _array_pull_pullAll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/pull_pullAll */ \"./src/array/pull_pullAll.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return _array_pull_pullAll__WEBPACK_IMPORTED_MODULE_11__[\"pull\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pullAll\", function() { return _array_pull_pullAll__WEBPACK_IMPORTED_MODULE_11__[\"pullAll\"]; });\n\n/* harmony import */ var _array_drop_dropRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/drop_dropRight */ \"./src/array/drop_dropRight.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"drop\", function() { return _array_drop_dropRight__WEBPACK_IMPORTED_MODULE_12__[\"drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropRight\", function() { return _array_drop_dropRight__WEBPACK_IMPORTED_MODULE_12__[\"dropRight\"]; });\n\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten1\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_13__[\"flatten1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flatten2\", function() { return _array_flatten__WEBPACK_IMPORTED_MODULE_13__[\"flatten2\"]; });\n\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return _array_slice__WEBPACK_IMPORTED_MODULE_14__[\"slice\"]; });\n\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique1\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_15__[\"unique1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique2\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_15__[\"unique2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique3\", function() { return _array_unique__WEBPACK_IMPORTED_MODULE_15__[\"unique3\"]; });\n\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return _object_newInstance__WEBPACK_IMPORTED_MODULE_16__[\"newInstance\"]; });\n\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__[\"myInstanceOf\"]; });\n\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__[\"mergeObject\"]; });\n\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return _object_clone__WEBPACK_IMPORTED_MODULE_19__[\"clone2\"]; });\n\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return _object_deepClone__WEBPACK_IMPORTED_MODULE_20__[\"deepClone4\"]; });\n\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string */ \"./src/string/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"reverseString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"palindrome\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return _string__WEBPACK_IMPORTED_MODULE_21__[\"truncate\"]; });\n\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./axios */ \"./src/axios/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"axios\", function() { return _axios__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./event-bus */ \"./src/event-bus/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"eventBus\", function() { return _event_bus__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./promise */ \"./src/promise/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Promise\", function() { return _promise__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pub-sub */ \"./src/pub-sub/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PubSub\", function() { return _pub_sub__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _da_stack_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./da/stack.js */ \"./src/da/stack.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stack\", function() { return _da_stack_js__WEBPACK_IMPORTED_MODULE_26__[\"Stack\"]; });\n\n/* harmony import */ var _da_queue_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./da/queue.js */ \"./src/da/queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return _da_queue_js__WEBPACK_IMPORTED_MODULE_27__[\"Queue\"]; });\n\n/* harmony import */ var _da_priority_queue_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./da/priority-queue.js */ \"./src/da/priority-queue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PriorityQueue\", function() { return _da_priority_queue_js__WEBPACK_IMPORTED_MODULE_28__[\"PriorityQueue\"]; });\n\n/* harmony import */ var _da_sort_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./da/sort.js */ \"./src/da/sort.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BubbleSort\", function() { return _da_sort_js__WEBPACK_IMPORTED_MODULE_29__[\"BubbleSort\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SelectSort\", function() { return _da_sort_js__WEBPACK_IMPORTED_MODULE_29__[\"SelectSort\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InsertSort\", function() { return _da_sort_js__WEBPACK_IMPORTED_MODULE_29__[\"InsertSort\"]; });\n\n// 入口文件\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/*! exports provided: clone1, clone2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone1\", function() { return clone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone2\", function() { return clone2; });\n//浅拷贝\r\n//方法一: 利用ES6语法\r\nfunction clone1 (target) {\r\n  if(target instanceof Array){  //数组\r\n    return targrt.reduce((pre, item) => {\r\n      pre.push(item)\r\n      return pre\r\n    }, [])\r\n  } else if (target !== null && typeof target === 'object'){  //对象\r\n    return {...target}\r\n  } else {  // 如果不是数组或对象, 直接返回\r\n    return target\r\n  }\r\n}\r\n\r\n// 方法二: 利用ES5语法: for...in\r\nfunction clone2 (target) {\r\n  if(target instanceof Array || (target !== null && typeof target === 'object')){\r\n    const cloneTarget = target instanceof Array ? [] : {}\r\n    for (const key in target) {\r\n      if(target.hasOwnProperty(key)){\r\n        cloneTarget[key] = target[key]\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/*! exports provided: deepClone1, deepClone2, deepClone3, deepClone4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone1\", function() { return deepClone1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone2\", function() { return deepClone2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone3\", function() { return deepClone3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deepClone4\", function() { return deepClone4; });\nfunction deepClone1 (target){\r\n  return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\n\r\nfunction deepClone2 (target){\r\n  if(target instanceof Array || (targat !== null && typeof target === 'object')){\r\n    const cloneTarget = target instanceof Array ? [] : {}\r\n    for(const key in target){\r\n      if(target.hasOwnProperty(key)){\r\n        cloneTarget[key] = deepClone2(target[key])\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n\r\nfunction deepClone3 (target, map=new Map()){\r\n  if(target instanceof Array || (targat !== null && typeof target === 'object')){\r\n    //如果map中存在对应的克隆对象，直接返回\r\n    let cloneTarget = map.get(target)\r\n    if(cloneTarget){\r\n      return cloneTarget\r\n    }\r\n    //创建克隆对象\r\n    cloneTarget = target instanceof Array ? [] : {}\r\n    map.set(target, cloneTarget)  //保存到map容器\r\n    for(const key in target){\r\n      if(target.hasOwnProperty(key)){\r\n        cloneTarget[key] = deepClone3(target[key], map)\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n\r\n\r\nfunction deepClone4 (target, map=new Map()){\r\n  if(target instanceof Array || (target !== null && typeof target === 'object')){\r\n    //如果map中存在对应的克隆对象，直接返回\r\n    let cloneTarget = map.get(target)\r\n    if(cloneTarget){\r\n      return cloneTarget\r\n    }\r\n    //创建克隆对象\r\n    if(target instanceof Array){\r\n      cloneTarget = []\r\n      map.set(target, cloneTarget)  //保存到map容器\r\n      target.forEach((item,index) => {\r\n        cloneTarget[index] = deepClone4(item, map)\r\n      })\r\n    } else {\r\n      cloneTarget = {}\r\n      map.set(target, cloneTarget)  //保存到map容器\r\n      for(const key in target){\r\n        if(target.hasOwnProperty(key)){\r\n          cloneTarget[key] = deepClone4(target[key], map)\r\n        }\r\n      }\r\n    }\r\n    return cloneTarget\r\n  } else {\r\n    return target\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/*! exports provided: mergeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mergeObject\", function() { return mergeObject; });\n/* harmony import */ var _array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/concat.js */ \"./src/array/concat.js\");\n\r\n\r\nfunction mergeObject(...objs){\r\n  const result = {}\r\n\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key => {\r\n      const value = obj[key]\r\n      if(!result.hasOwnProperty(key)){\r\n        result[key] = value\r\n      }else{\r\n        result[key] = Object(_array_concat_js__WEBPACK_IMPORTED_MODULE_0__[\"concat\"])([], result[key], value)\r\n      }\r\n    })\r\n  })\r\n  \r\n  return result\r\n}\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/*! exports provided: myInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myInstanceOf\", function() { return myInstanceOf; });\nfunction myInstanceOf (obj, type) {\r\n  let protoObj = obj.__proto__\r\n\r\n  while(protoObj !== null){\r\n    // 如果就是Type的原型对象, 直接返回true\r\n    if(protoObj === type.prototype){\r\n      return true\r\n    }\r\n    // 取出下一个原型对象, 并保存\r\n    protoObj = protoObj.__proto__\r\n  }\r\n\r\n  return false\r\n}\n\n//# sourceURL=webpack://aUtils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/*! exports provided: newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newInstance\", function() { return newInstance; });\n\r\nfunction newInstance (Fn, ...args) {\r\n  const obj = {}  //创建一个空对象\r\n  const result = Fn.apply(obj,args)  //调用Fn函数, 且指定this是新创建对象\r\n  if(result instanceof Object){\r\n    return result\r\n  }\r\n\r\n  obj.__proto__ = Fn.prototype  // 将构造函数的显示原型属性值赋值实例对象的隐式原型属性\r\n\r\n  return obj\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/promise/index.js":
/*!******************************!*\
  !*** ./src/promise/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PENDING = 'pending' // 初始未确定的状态\nconst RESOLVED = 'resolved' // 成功的状态\nconst REJECTED = 'rejected' // 失败的状态\n\n/* \nPromise构造函数\n*/\nfunction Promise(excutor) {\n\n  const self = this // Promise的实例对象\n  self.status = PENDING // 状态属性, 初始值为pending, 代表初始未确定的状态\n  self.data = undefined // 用来存储结果数据的属性, 初始值为undefined\n  self.callbacks = [] // {onResolved(){}, onRejected(){}}\n\n  /* \n  将promise的状态改为成功, 指定成功的value\n  */\n  function resolve(value) {\n    // 如果当前不是pending, 直接结束\n    if (self.status !== PENDING) return\n\n    self.status = RESOLVED // 将状态改为成功\n    self.data = value // 保存成功的value\n\n    // 异步调用所有缓存的待执行成功的回调函数\n    if (self.callbacks.length > 0) {\n      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有成功的回调\n      setTimeout(() => {\n        self.callbacks.forEach(cbsObj => {\n          cbsObj.onResolved(value)\n        })\n      })\n    }\n  }\n\n  /* \n  将promise的状态改为失败, 指定失败的reason\n  */\n  function reject(reason) {\n    // 如果当前不是pending, 直接结束\n    if (self.status !== PENDING) return\n\n    self.status = REJECTED // 将状态改为失败\n    self.data = reason // 保存reason数据\n\n    // 异步调用所有缓存的待执行失败的回调函数\n    if (self.callbacks.length > 0) {\n      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有失败的回调\n      setTimeout(() => {\n        self.callbacks.forEach(cbsObj => {\n          cbsObj.onRejected(reason)\n        })\n      })\n    }\n  }\n\n  // 调用excutor来启动异步任务\n  try {\n    excutor(resolve, reject)\n  } catch (error) { // 执行器执行出错, 当前promise变为失败\n    console.log('-----')\n    reject(error)\n  }\n\n}\n\n/* \n用来指定成功/失败回调函数的方法\n    1). 如果当前promise是resolved, 异步执行成功的回调函数onResolved\n    2). 如果当前promise是rejected, 异步执行成功的回调函数onRejected\n    3). 如果当前promise是pending, 保存回调函数\n返回一个新的promise对象\n    它的结果状态由onResolved或者onRejected执行的结果决定\n    2.1). 抛出error ==> 变为rejected, 结果值为error\n    2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值\n    2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)\n*/\nPromise.prototype.then = function (onResolved, onRejected) {\n  const self = this\n\n  onResolved = typeof onResolved === 'function' ? onResolved : value => value // 将value向下传递\n  onRejected = typeof onRejected === 'function' ? onRejected : reason => {\n    throw reason\n  } // 将reason向下传递\n\n  return new Promise((resolve, reject) => { // 什么时候改变它的状态\n\n    /* \n    1. 调用指定的回调函数\n    2. 根据回调执行结果来更新返回promise的状态\n    */\n    function handle(callback) {\n      try {\n        const result = callback(self.data)\n        if (!(result instanceof Promise)) { //  2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值\n          resolve(result)\n        } else { // 2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)\n          result.then(\n            value => resolve(value),\n            reason => reject(reason)\n          )\n          // result.then(resolve, reject)\n        }\n      } catch (error) { // 2.1). 抛出error ==> 变为rejected, 结果值为error\n        reject(error)\n      }\n    }\n\n    if (self.status === RESOLVED) {\n      setTimeout(() => {\n        handle(onResolved)\n      })\n    } else if (self.status === REJECTED) {\n      setTimeout(() => {\n        handle(onRejected)\n      })\n    } else { // PENDING\n      self.callbacks.push({\n        onResolved(value) {\n          handle(onResolved)\n        },\n        onRejected(reason) {\n          handle(onRejected)\n        }\n      })\n    }\n  })\n}\n\n/* \n用来指定失败回调函数的方法\ncatch是then的语法糖\n*/\nPromise.prototype.catch = function (onRejected) {\n  return this.then(undefined, onRejected)\n}\n\n/* \n用来返回一个指定vlaue的成功的promise\nvalue可能是一个一般的值, 也可能是promise对象\n*/\nPromise.resolve = function (value) {\n  return new Promise((resolve, reject) => {\n    // 如果value是一个promise, 最终返回的promise的结果由value决定\n    if (value instanceof Promise) {\n      value.then(resolve, reject)\n    } else { // value不是promise, 返回的是成功的promise, 成功的值就是value\n      resolve(value)\n    }\n  })\n}\n\n/* \n用来返回一个指定reason的失败的promise\n*/\nPromise.reject = function (reason) {\n  return new Promise((resolve, reject) => {\n    reject(reason)\n  })\n}\n\n/* \n返回一个promise, 只有当数组中所有promise都成功才成功, 否则失败\n*/\nPromise.all = function (promises) {\n  return new Promise((resolve, reject) => {\n\n    let resolvedCount = 0 // 已经成功的数量 \n    const values = new Array(promises.length) // 用来保存成功promise的value值\n    // 遍历所有promise, 取其对应的结果\n    promises.forEach((p, index) => {\n      p.then(\n        value => {\n          resolvedCount++\n          values[index] = value\n          if (resolvedCount === promises.length) { // 都成功了\n            resolve(values)\n          }\n        },\n        reason => reject(reason)\n      )\n    })\n  })\n}\n\n/* \n返回一个promise, 由第一个完成promise决定\n*/\nPromise.race = function (promises) {\n  return new Promise((resolve, reject) => {\n    // 遍历所有promise, 取其对应的结果\n    promises.forEach(p => {\n      // 返回的promise由第一个完成p来决定其结果\n      p.then(resolve, reject)\n    })\n  })\n}\n\n/* \n返回一个延迟指定时间才成功(也可能失败)的promise\n*/\nPromise.resolveDelay = function (value, time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      // 如果value是一个promise, 最终返回的promise的结果由value决定\n      if (value instanceof Promise) {\n        value.then(resolve, reject)\n      } else { // value不是promise, 返回的是成功的promise, 成功的值就是value\n        resolve(value)\n      }\n    }, time)\n  })\n}\n\n/* \n返回一个延迟指定时间才失败的promise\n*/\nPromise.rejectDelay = function (reason, time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(reason)\n    }, time)\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Promise);\n\n//# sourceURL=webpack://aUtils/./src/promise/index.js?");

/***/ }),

/***/ "./src/pub-sub/index.js":
/*!******************************!*\
  !*** ./src/pub-sub/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \n自定义消息订阅与发布\n*/\n\nconst PubSub = {}\n/* \n  {\n    add: {\n      token1: callback1, \n      token2: callback2\n    },\n    update: {\n      token3: callback3\n    }\n  }\n*/\nlet callbacksObj = {} // 保存所有回调的容器\nlet id = 0 // 用于生成token的标记\n\n// 1. 订阅消息\nPubSub.subscribe = function (msgName, callback) {\n\n  // 确定token\n  const token = 'token_' + ++id\n  // 取出当前消息对应的callbacks\n  const callbacks = callbacksObj[msgName]\n  if (!callbacks) {\n    callbacksObj[msgName] = {\n      [token]: callback\n    }\n  } else {\n    callbacks[token] = callback\n  }\n  // 返回token\n  return token\n}\n\n\n// 2. 发布异步的消息\nPubSub.publish = function (msgName, data) {\n  // 取出当前消息对应的callbacks\n  let callbacks = callbacksObj[msgName]\n  // 如果有值\n  if (callbacks) {\n    // callbacks = Object.assign({}, callbacks)\n    // 启动定时器, 异步执行所有的回调函数\n    setTimeout(() => {\n      Object.values(callbacks).forEach(callback => {\n        callback(data)\n      })\n    }, 0)\n  }\n}\n\n// 3. 发布同步的消息\nPubSub.publishSync = function (msgName, data) {\n  // 取出当前消息对应的callbacks\n  const callbacks = callbacksObj[msgName]\n  // 如果有值\n  if (callbacks) {\n    // 立即同步执行所有的回调函数\n    Object.values(callbacks).forEach(callback => {\n      callback(data)\n    })\n  }\n}\n\n/*\n4. 取消消息订阅\n  1). 没有传值, flag为undefined\n  2). 传入token字符串\n  3). msgName字符串\n*/\nPubSub.unsubscribe = function (flag) {\n  // 如果flag没有指定或者为null, 取消所有\n  if (flag === undefined) {\n    callbacksObj = {}\n  } else if (typeof flag === 'string') {\n    if (flag.indexOf('token_') === 0) { // flag是token\n      // 找到flag对应的callbacks\n      const callbacks = Object.values(callbacksObj).find(callbacks => callbacks.hasOwnProperty(flag))\n      // 如果存在, 删除对应的属性\n      if (callbacks) {\n        delete callbacks[flag]\n      }\n    } else { // flag是msgName\n      delete callbacksObj[flag]\n    }\n\n  } else {\n    throw new Error('如果传入参数, 必须是字符串类型')\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PubSub);\n\n//# sourceURL=webpack://aUtils/./src/pub-sub/index.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/*! exports provided: reverseString, palindrome, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverseString\", function() { return reverseString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"palindrome\", function() { return palindrome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"truncate\", function() { return truncate; });\n/* \r\n1. 字符串倒序: reverseString(str)  生成一个倒序的字符串\r\n2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\r\n3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\r\n*/\r\n\r\nfunction reverseString(str){\r\n  return str.split('').reverse().join('')\r\n}\r\n\r\nfunction palindrome(str){\r\n  return str === reverseString(str)\r\n}\r\n\r\nfunction truncate(str, num){\r\n  return str.length > num ? str.substring(0,num) + '...' : str\r\n}\r\n\n\n//# sourceURL=webpack://aUtils/./src/string/index.js?");

/***/ })

/******/ });
});