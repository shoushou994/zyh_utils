export function apply(fn, obj, args){
  if(obj === undefined || obj === null){
    obj = window
  }
  //给obj添加tempFn方法，tempFn: this
  obj.tempFn = fn  
  // 调用obj的tempFn方法, 传入rags参数, 得到返回值
  const result = obj.tempFn(...args)
  delete obj.tempFn  //删除obj上的tempFn
  return result
}   