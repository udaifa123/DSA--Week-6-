//_______________________________Simple Notification Queue simulation__________________________
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
            console.log("Sending:",this.dequeue());
        }
    }
}

let q=new Queue();

q.enqueue("Email to user1");
q.enqueue("Email to user2");
q.enqueue("Email to user3");

q.process();






//_________________________________Request Queue Simulation(API flow)__________________________________
let requestQueue=[];
function addRequest(req){
    requestQueue.push(req);
}

function processRequest(){
    if(requestQueue.length){
        let req=requestQueue.shift();
        console.log("Processing:",req);
    }
}

addRequest("User1 request");
addRequest("User2 request");

processRequest();
processRequest();








//__________________________________Rate Limiter(Basic Idea)_______________________________________
let count=0;
let LIMIT=3;

function request(){
    if(count>=LIMIT){
        console.log("Too many requests❌");
        return;
    }
    count++;
    console.log("Request allowed✅"); 
}

request();
request();
request();
request();//blocked