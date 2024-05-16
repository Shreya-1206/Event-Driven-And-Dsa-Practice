function sortAndFindIndex(arr,  val){
   const sortArr = arr.sort((a,b) => a - b);
   
   for(let i = 0; i<sortArr.length; i++){
    if(arr[i] === val){
        return `${arr[i]} found at index ${i}`
    }
   }
}

console.log(sortAndFindIndex([90,78,55,42,67,1,12,28,88], 67));

function sortAndFindString(str, word){
    const sortStr = str.split(' ').sort();
    console.log(sortStr);

    for(let i = 0; i<sortStr.length; i++){
        if(sortStr[i] === word){
            return `${word} found at index ${i}`
        }
    }
    return `${word} not found in the array`
}
console.log(sortAndFindString('hello madam ohh thats you', 'thats'))