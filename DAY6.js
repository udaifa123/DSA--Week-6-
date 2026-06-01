//________________________________STACK PROBLEMS________________________________________
//__________________________Browser Back Stack_________________________________
class Browser{
    constructor(){
        this.stack=[];
    }

    visit(page){
        this.stack.push(page);
    }

    back(){
        if(this.stack.length > 1){
            this.stack.pop();
        }
        return this.stack[this.stack.length-1];
    }
}

let b=new Browser();
b.visit("Home");
b.visit("About");
b.visit("Contact");

console.log(b.back())






//________________________________Undo/Redo Stack_____________________________
class Editor{
    constructor(){
        this.undoStack=[];
        this.redoStack=[];
    }

    write(text){
        this.undoStack.push(text);
        this.redoStack=[];
    }

    undo(){
        if(this.undoStack.length){
            let val=this.undoStack.pop();
            this.redoStack.push(val);
        }
        return this.undoStack[this.undoStack.length-1];
    }

    redo(){
        if(this.redoStack.length){
            let val=this.redoStack.pop();
            this.undoStack.push(val);
        }
        return this.undoStack[this.undoStack.length-1];
    }
}

let e=new Editor();
e.write("A");
e.write("B");

console.log(e.undo());
console.log(e.redo());








//___________________________QUEUE PROBLEMS_____________________________________________
//_____________________Notification Queue_________________________________
class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(val){
        this.items.push(val);
    }

    dequeue(){
        return this.items.shift();
    }

    process(){
        while(this.items.length){
            console.log("Send:",this.dequeue());
        }
    }
}

let q=new Queue();
q.enqueue("Msg1");
q.enqueue("Msg2");

q.process();





//_____________________________Request Throttling_______________________________
let lastCall=0;
let delay=2000;

function throttle(){
    let now=Date.now();

    if(now-lastCall>=delay){
        console.log("Request allowed✅");
        lastCall=now;
    }else{
        console.log("Blocked❌");
    }
}

throttle();
throttle();