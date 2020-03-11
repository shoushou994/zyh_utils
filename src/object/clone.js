//浅拷贝
//方法一: 利用ES6语法
export function clone1 (target) {
  if(target instanceof Array){  //数组
    // return [...target]
    // return target.slice()
    // return [].concat(target)
    // return Array.from(target)
    // return target.filter(value => true)
    // return target.map(item => item)
    return targrt.reduce((pre, item) => {
      pre.push(item)
      return pre
    }, [])
  } else if (target !== null && typeof target === 'object'){  //对象
    return {...target}
  } else {  // 如果不是数组或对象, 直接返回
    return target
  }
}

// 方法二: 利用ES5语法: for...in
export function clone2 (target) {
  //被处理的目标是数组或对象
  if(target instanceof Array || (target !== null && typeof target === 'object')){
    const cloneTarget = target instanceof Array ? [] : {}
    for (const key in target) {
      if(target.hasOwnProperty(key)){
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

