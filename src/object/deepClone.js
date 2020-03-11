/* 
实现深拷贝
    1). 大众乞丐版
        问题1: 函数属性会丢失
        问题2: 循环引用会出错
    2). 面试基础版本
        解决问题1: 函数属性还没丢失
        问题2: 循环引用会出错
    3). 面试加强版本
        解决问题2: 循环引用正常
    4). 面试加强版本2(优化数组遍历性能)
        数组: while | for | forEach() 优于 for-in | keys()&forEach() 
        对象: for-in 与 keys()&forEach() 差不多
*/

export function deepClone1 (target){
  return JSON.parse(JSON.stringify(target))
}


export function deepClone2 (target){
  if(target instanceof Array || (targat !== null && typeof target === 'object')){
    const cloneTarget = target instanceof Array ? [] : {}
    for(const key in target){
      if(target.hasOwnProperty(key)){
        //对属性值进行递归处理
        cloneTarget[key] = deepClone2(target[key])
      }
    }
    return cloneTarget
  } else {
    return target
  }
}


/*    
3. 解决思路:
    目标: 同一个对象/数组只能被克隆1次
    创建克隆对象前:　如果克隆对象已经存在, 直接返回
    创建克隆对象后: 保存克隆对象 
    缓存容器结构: Map  key: target, value: cloneTaget
*/
export function deepClone3 (target, map=new Map()){
  if(target instanceof Array || (targat !== null && typeof target === 'object')){
    //如果map中存在对应的克隆对象，直接返回
    let cloneTarget = map.get(target)
    //同一个对象只克隆一次
    if(cloneTarget){
      return cloneTarget
    }
    //创建克隆对象
    cloneTarget = target instanceof Array ? [] : {}
    //保存到map容器
    map.set(target, cloneTarget)  

    for(const key in target){
      if(target.hasOwnProperty(key)){
        //对属性值进行递归处理
        cloneTarget[key] = deepClone3(target[key], map)
      }
    }
    return cloneTarget
  } else {
    return target
  }
}


// 优化数组的遍历: 不用for...in, 而用forEach
export function deepClone4 (target, map=new Map()){
  if(target instanceof Array || (target !== null && typeof target === 'object')){
    //如果map中存在对应的克隆对象，直接返回
    let cloneTarget = map.get(target)
    //同一个对象只克隆一次
    if(cloneTarget){
      return cloneTarget
    }
    //创建克隆对象
    if(target instanceof Array){  //数组
      cloneTarget = []
      map.set(target, cloneTarget)  //保存到map容器
      target.forEach((item,index) => {
        //对属性值进行递归处理
        cloneTarget[index] = deepClone4(item, map)
      })
    } else {  //对象
      cloneTarget = {}
      map.set(target, cloneTarget)  //保存到map容器
      for(const key in target){
        if(target.hasOwnProperty(key)){
          //对属性值进行递归处理
          cloneTarget[key] = deepClone4(target[key], map)
        }
      }
    }
    return cloneTarget
  } else {
    return target
  }
}


