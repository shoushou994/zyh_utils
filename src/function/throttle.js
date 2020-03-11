//自定义节流
export function throttle(callback, delay) {
  let pre = 0  //第一次事件立即调用
  return function (event) {
    // console.log('事件throttle');
    let current = Date.now()
    if(current-pre > delay){
      //this是事件源，参数是event
      callback.call(this, event)
      //记录此次调用的时间
      pre = current
    }
  }
}
