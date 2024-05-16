function findMax(arr){
    let maxVal = arr[0]
    
    for(let i= 1; i<arr.length; i++){
        if(maxVal < arr[i]){
            maxVal = arr[i];
        }
    }
    return maxVal
}

console.log(findMax([90,67,56,22,34,100,19,12,45,141]))

