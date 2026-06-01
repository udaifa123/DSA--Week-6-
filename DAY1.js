//______________________Implement Stack using Array______________________________
class Stack {
  constructor(){
    this.items = [];
  }

  push(val){
    this.items.push(val);
  }

  pop(){
    return this.items.pop();
  }

  peek(){
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    return this.items.length === 0;
  }
}

// example
let s = new Stack();
s.push(10);
s.push(20);
s.push(30);

console.log(s.peek()); // 30
console.log(s.pop());  // 30
console.log(s.items);








//_____________________________Valid Parentheses_____________________________________
function isValid(str){
    let stack=[];

    for(let ch of str){
        if(ch==='('){
            stack.push(ch);
        }else{
            if(stack.length===0) return false;
            stack.pop();
        }
    }

    return stack.length===0;
}

console.log(isValid("(()())"));
console.log(isValid("(()"))






//____________________________Reverse a String using stack________________________________
function reverseString(str){
    let stack=[];

    for(let ch of str){
        stack.push(ch);
    }

    let result="";

    while(stack.length){
        result+=stack.pop();
    }

    return result;
}

console.log(reverseString("hello"))






//__________________________Next Greater Element________________________________
function nextGreater(arr){
    let stack=[];
    let result=Array(arr.length).fill(-1);

    for(let i=0;i<arr.length;i++){
        while(stack.length && arr[i]>arr[stack[stack.length-1]]){
            let idx=stack.pop();
            result[idx]=arr[i];
        }
        stack.push(i);
    }
    return result;
}
console.log(nextGreater([2,1,3,4]))







//________________________Check Stack is Empty__________________________________
let stack=[];
function isEmpty(){
    return stack.length===0;
}
console.log(isEmpty())