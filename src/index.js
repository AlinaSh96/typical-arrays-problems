
exports.min = function min (array) {

if (!array || !array.length) return 0;

  let  minNumber=array[0];
  for (i=0;i<array.length; i++){
    if (array[i]<minNumber){
     minNumber = array[i];
    }
  else minNumber = minNumber;
  }
  return minNumber;

  }
  


exports.max = function max (array) {
  if (!array || !array.length) return 0;

 let  maxNumber=array[0];
for (i=0;i<array.length; i++){
  if (array[i]>maxNumber){
   maxNumber = array[i];
  }
else maxNumber = maxNumber;
}
return maxNumber;
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  
  let  sum=0;
for (i=0;i<array.length; i++){
  sum +=array[i];
}
let avg = sum/array.length;

return avg;
}
