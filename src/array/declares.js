
export function map(array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    arr.push(result)
  }
  return arr
}

export function reduce(array,callback,initValue) {
  //结果为初始值
  let total = initValue
  // 遍历当前数组每个元素, 调用callback得到一个累加的结果数据
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    total = callback(total,element,index)
  }
  return total
}

export function filter(array,callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (result) {
      arr.push(element)
    }
  }
  return arr
}

export function find(array,callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (result) {
      return element
    }
  }
  return undefined
}

export function findIndex(array,callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (result) {
      return index
    }
  }
  return -1
}

export function every(array,callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (!result) {
      return false
    }
  }
  return true
}

export function some(array,callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (result) {
      return true
    }
  }
  return false
}


