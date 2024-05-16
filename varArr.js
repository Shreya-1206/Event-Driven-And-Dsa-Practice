const arr = [90,64,1,12,2];

for (var i =0; i<arr.length; i++){
    setTimeout(()=>{
        console.log(`${arr[i]} has index ${i}`);
    },3000)
}
for (var x =0; x<6; x++){
    setTimeout(()=>{
        console.log(`${x} is printed`);
    },3000)
}