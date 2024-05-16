class Node{
    constructor(value, next) {
        this.value = value;
        this.next =next;
    }
}

class Stack{
    constructor(){
        this.top = new Node(null, null);
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val, this.top); // val : value, this.top : pointer
        this.top = newNode;
        this.size ++;
    }

    pop() {
        if(this.size > 0){
         let getNode = this.top.value;
         this.top = this.top.next;
         this.size--;
        }
    }
    
    peek(){
        if(this.size > 0){
            return this.top.value;
        }else{
            throw 'Sorry Stack UnderFlow'
        }
    }

    isEmpty() {
        return this.size === 0
    }

    print() {
        var holder = this.top;
        while(holder.next !== null){
            console.log(holder.value);
            holder = holder.next;
        }
    }
    
    search(val){
        var index= 0;
        var holder = this.top;
        var found = false
        
        while(!found && holder !== null){
            if(holder.value === val){
                console.log(`Found ${val} at ${index}`)
                found = true
            }
            holder = holder.next;
            index++;
        }
        if(!found){
            console.log(`Sorry ${val} not found`)
        }
    }
}

const s =new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.print();
s.search(3);