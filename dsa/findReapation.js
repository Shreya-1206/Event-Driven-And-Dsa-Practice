function findRepeatNum(arr){
    let result ={};

    arr.reduce((acc, curr) => {
        if (result[curr]){
            result[curr] += 1;
        }else{
            result[curr] = 1;
        }
        return acc;
    }, {});

    return result;
}
console.log(findRepeatNum([1,2,3,4,66,2,4,5,6,3,56,22,5,66]));

function findRepeatStr(str){
    let result ={};
    str.split(' ').reduce((acc, curr) =>{
        if(result[curr]){
            result[curr] += 1
        }else {
            result[curr] =1
        }
        return acc;
    }, {})
    return result;
}
console.log(findRepeatStr("zig zag zoh zig zag zoh zig zoh"));