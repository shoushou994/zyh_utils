/* 
  入队列: enqueue()
  出队列: dequeue()
  查看队头: front()
  查看元素的个数: size()
  判断队列是否为空: isEmpty() 
*/

export function Queue () {
  const arr = []

  this.enqueue = function(element){
    arr.push(element)
  }

  this.dequeue = function(){
    return arr.shift()
  }

  this.front = function(){
    return arr[0]
  }

  this.size = function(){
    return arr.length
  }

  this.isEmpty = function(){
    return arr.length === 0
  }
}