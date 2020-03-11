
//compact取真：
// 返回数组中所有真值元素组成的新数组

import {filter} from './declares'

export function compact(array){
  return filter(array, item => item);
}

