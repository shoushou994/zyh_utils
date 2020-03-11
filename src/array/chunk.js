//区块：
//将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组

export function chunk(array,size=1){
  const bigArr = []
  let smallArr = []

  if (array.length===0) {
    return bigArr
  }

  if(size<1){
    size = 1
  }else if (size > array.length) {
    size = array.length
  }

  array.forEach(item => {
    //将小数组放到大数组中（只能放一次）
    if(smallArr.length===0){
      bigArr.push(smallArr)
    }
    smallArr.push(item)
    //限制smallArr的最大长度是size
    if(smallArr.length===size){
      smallArr = []
    }
  })
  return bigArr
}