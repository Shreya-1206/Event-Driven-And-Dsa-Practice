const inputFirst = document.querySelector('.first')
const inputSecond = document.querySelector('.second')
const para = document.querySelector('.para')
const btn = document.querySelector('.btn');


btn.addEventListener('click', function helloUser(e){
    e.preventDefault();
   console.log(e.target.inputFirst);
   const first = inputFirst.value;
   console.log(first);
   const second = inputSecond.value;
   console.log(second)
   para.textContent = (`Hello ${first} ${second}`);

   inputFirst.value = '';
   inputSecond.value = '';
})