export function PriorityQueue(){
  const arr = []

  //队列每个元素的类型
  function QueueElement(data, priority) {
    this.data = data
    this.priority = priority
  }

  this.enqueue = function(data, priority){
    if(priority<0 || priority>100){
      throw new Error('优先级必须在1到100之间')
    }

    //创建一个新的元素
    const element = new QueueElement(data, priority)
    // 如果当前是空的, 直接添加
    if(arr.length === 0){
      arr.push(element)
    } else {  // 将当前element插入到arr中的一个合适: 在priority值大于当前值的左边
      for(let index = 0; index < arr.length; index++){
        if(arr[index].priority > priority){
          arr.splice(index, 0, element)
          return
        }
      }
      //当前要添加的priority是最大的
      arr.push(element)
    }

    
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