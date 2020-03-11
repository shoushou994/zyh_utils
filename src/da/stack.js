/* 
  压栈：push()
  出栈：pop()
  查看栈顶：peek()
  查看栈中元素的个数: size()
  判断是否为空栈: isEmpty() 
*/

export function Stack () {
  const arr = []

  this.push = function(element){
    arr.push(element)
  }

  this.pop = function(){
    return arr.pop()
  }

  this.peek = function(){
    return arr[arr.length - 1]
  }

  this.size = function(){
    return arr.length
  }

  this.isEmpty = function(){
    return arr.length === 0
  }
}