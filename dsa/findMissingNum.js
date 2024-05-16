let num = [];

for(let i = 0; i<=100; i++){
    if(i !== 30){
        num.push(i);
    }
}
console.log(num);

const total = num.reduce((acc,curr) => acc + curr);

console.log(5050 - total);