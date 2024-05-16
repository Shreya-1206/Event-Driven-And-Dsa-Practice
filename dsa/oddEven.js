const arr = [34,78,90,141,234,22,12,2,6,9,99,100];

const even= [];
const odd = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        even.push(arr[i]);
    }else {
        odd.push(arr[i]);
    }
}

console.log(`Even : ${even}`);
console.log(`Odd : ${odd}`);