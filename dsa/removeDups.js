function removeDupsNums(arr){
  const sortArr = arr.sort(a,b => a-b);
  let newArr =[];
  for(let i=0; i < sortArr.length; i++){
    if(sortArr[i] === sortArr[i + 1]){
        sortArr.splice(i,1)
    }else {
      newArr.push(sortArr[i]);
    }
  }
  return newArr;
}

function removeDupsStr (str){
    let strArr= str.split(' ').sort();
    let newStr = [];
    console.log(strArr);
    for(let i = 0; i<strArr.length; i++){
        if(strArr[i] !== strArr[i+1]) {
            newStr.push(strArr[i]);
        }
    }
    return newStr.join(' ');

}
console.log(removeDupsStr("zig zag zoh zig zag"));

