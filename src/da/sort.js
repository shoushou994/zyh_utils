
// 冒泡排序
export function BubbleSort(arr){
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
    
//选择排序
export function SelectSort(arr){
  for(let i = 0; i < arr.length - 1; i++){
    let minIndex = i
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    if(minIndex !== i){
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
  }
  return arr
}

//插入排序
export function InsertSort(arr){
  for(let i=1; i < arr.length; i++){
    let start = arr[i]
    let j
    for(j=i-1; j >= 0; j--){
      if(start < arr[j]){
        arr[j+1] = arr[j]
      } else {
        break;
      }
    }
    arr[j+1] = start

    /* let j = i - 1
    while(arr[j] > start && arr[j] > 0){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = start */

  }
  return arr
}


