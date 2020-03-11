//希尔排序
function ShellSort(arr){
  let distance = arr.length
  while (distance > 1) {
    distance = Math.floor(distance/2)
    for (let i = distance; i < arr.length; i++){  //遍历右侧部分 未排序的区域
      let start = arr[i]
      let j = i - distance  //将start与左边的比较，从右向左比
      while(j >= 0 && arr[j] > start) {
        arr[j+distance] = arr[j]  //向右移位交换
        j = j - distance
      }
      arr[j+distance] = start
    }
  }
  return arr
}
console.log(ShellSort([3,5,6,2,8,1,4,7]));
console.log(ShellSort([1,5,6,2,8,3,4,7]));