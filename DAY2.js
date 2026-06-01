//___________________________Implement Queue using Array_________________________________
class Queue{
    constructor(){
        this.items=[];
    }


    enqueue(val){
        this.items.push(val);
    }

    dequeue(){
        if(this.isEmpty()) return "Empty";
        return this.items.shift();
    }

    front(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length===0;
    }
}

let q=new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue());
console.log(q.front());






//____________________________Queue using Linked List_____________________________
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Queue1 {
    constructor(){
        this.front=null;
        this.rear=null;
    }

    enqueue(val){
        let newNode=new Node(val);

        if(!this.rear){
            this.front=this.rear=newNode;
            return;
        }

        this.rear.next=newNode;
        this.rear=newNode;
    }

    dequeue(){
        if(!this.front) return "Empty";

        let removed=this.front;
        this.front=this.front.next;

        if(!this.front) this.rear=null;

        return removed.val;
    }
}

let q1= new Queue1();
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue())






//____________________________Reverse   Queue________________________________
function reverseQueue(queue){
    let stack=[];

    while(queue.length){
        stack.push(queue.shift());
    }

    while(stack.length){
        queue.push(stack.pop());
    }

    return queue;
}
console.log(reverseQueue([1,2,3,4]))







//__________________________First Non-Repeating Character________________________________
function firstUnique(str){
    let freq={};
    let q=[];

    for(let ch of str){
        freq[ch] = (freq[ch] || 0) + 1;
        q.push(ch);

        while(q.length && freq[q[0]] > 1){
            q.shift();
        }
    }

    return q[0] || -1;
}

console.log(firstUnique("aabc"))





//____________________________Circular Queue(basic)________________________________
class CircularQueue{
    constructor(size){
        this.size=size;
        this.queue=new Array(size);
        this.front=-1;
        this.rear=-1;
    }

    enqueue(val){
        if((this.rear+1) % this.size === this.front){
            console.log("Full");
            return;
        }

        if(this.front === 1) this.front = 0;

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = val;
    }

    dequeue(){
        if(this.front === -1){
            console.log("Empty");
            return;
        }

        let val = this.queue[this.front];

        if(this.front===this.rear){
            this.front=this.rear=-1;
        }else{
            this.front=(this.front+1) % this.size;
        }

        return val;
    }
}