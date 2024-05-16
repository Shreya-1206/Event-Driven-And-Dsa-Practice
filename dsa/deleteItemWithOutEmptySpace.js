function deleteItemFromArr (arr,val){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === val){
            console.log(`${arr[i]} is getting deleted and it is at index ${i}!! `);
            arr.splice(i,1);
        }
    }
    return arr;
}

console.log(deleteItemFromArr([90,4,33,56,12], 33))