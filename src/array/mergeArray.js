/* 
 合并数组 mergeArray(arr1, arr2 [,arr3...]): 将(多个)arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)
    如: mergeArray([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]
*/

export function mergeArray(array, ...arrays){
  const result = [...array]
  if(arrays.length === 0){
    return result
  }

  arrays.forEach(itemArr => {
    itemArr.forEach(item => {
      if(result.indexOf(item) === -1){
        result.push(item)
      }
    })
  })

  return result
}