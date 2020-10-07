
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if(arguments.length==0) return []
   let arr = []
   matrix.forEach((item,i)=> {
      if(i%2==0) {
         item.forEach(elem=> arr.push(elem))
      }else {
         item.reverse();
         item.forEach(elem=> arr.push(elem))
      }
   })
 return arr
}
