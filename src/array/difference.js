
// 差异 difference(arr1, arr2)： 得到当前数组arr1中所有不在arr2中的元素组成的数组，不改变原数组
// 如：difference([1,3,5,6], [5,7]) ==> [1,3,6]

import {filter} from './declares'

export function difference(arr1, arr2){
  if (arr1.length===0) {
    return []
  }
  if (arr2.length===0) {
    return [...arr1]
  }

  return filter(arr1, item => arr2.indexOf(item)===-1)
}



export function differences(arr1, ...arrays){
  if (arr1.length===0) {
    return []
  } else if (arr2.length===0) {
    return [...arr1]
  }

  return filter(arr1, item => {
    let result = true  //假设当前元素在后面的所有数组都不存在
    for(let index = 0; index < arrays.length; index++){
      const array = arrays[index]
      if(array.indexOf(item) !== -1){
        result = false
        break 
      }
    }
    return result
  })
}

