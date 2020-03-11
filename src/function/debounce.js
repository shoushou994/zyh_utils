
//自定义防抖
export function debounce(callback, delay) {
  return function (event) {
    //如果上次事件还没有真正处理，取消它
    //使用callback.timer  会查找原型链
    if (callback.hasOwnProperty('timer')) {  //不会查找原型链
      clearTimeout(callback.timer)
    }
    callback.timer = setTimeout(()=>{
      callback.call(this, event)  //正在处理事件
      delete callback.timer  //删除准备处理的标记
    }, delay)
  }
}