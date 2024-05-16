function findTwoSum (arr, target) {
    let indexes ={};

    for (let i =0; i<arr.length; i++){
        let complement = target - arr[i];
        
        if(complement in indexes){
            return [indexes[complement], i];
        }
        indexes[arr[i]] = i
    }

}

console.log(findTwoSum([2,7,11,15], 9))
console.log(findTwoSum([1,6,3,6], 12))
