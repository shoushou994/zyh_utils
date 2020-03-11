
import call from './call'

export function bind(fn, obj, ...args){
  //返回一个新函数
  return (...args2) => {
    return call(fn,obj, ...args, ...args2)
  }
}