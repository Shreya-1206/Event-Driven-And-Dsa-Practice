class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
       return this.stack.push(val);
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack)
    }
}

function reverseString(str){
    let newStack = new Stack();
    let reverStr = "";

    for(let i =0; i<str.length; i++) {
        newStack.push(str[i]);
    }

    newStack.print();
    while(!newStack.isEmpty()){
        reverStr += newStack.pop();
    }

    if(reverStr === str){
        console.log(`The string ${str} is a palindrome`)
    }else {
        console.log(`The string is ${str} not a palindrome`)
    }
}

reverseString("kite");

reverseString("dad");