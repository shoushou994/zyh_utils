export default function call(fn, obj, ...args){
  if(obj === undefined || obj === null){
    obj = window
  }
  obj.tempFn = fn  //给obj添加tempFn方法
  const result = obj.tempFn(...args)
  delete obj.tempFn  //删除obj上的tempFn
  return result
}