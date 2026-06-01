//_______________________________Valid Parentheses_____________________________________
function isValid(str){
    let stack=[];

    for(let ch of str){
        if(ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }else{
            let top=stack.pop();

            if(
                (ch === ')' && top !== '(') ||
                (ch === '}' && top !== '{') ||
                (ch === ']' && top !== '[')
            ){
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("({[]})"));
console.log(isValid("(]"));
console.log(isValid("((("));



//🧠 ⭐ STEP-BY-STEP IDEA 

//👉 ( → push
// 👉 { → push
// 👉 } → pop & check
// 👉 last-il stack empty aayal ✔ valid






//____________________________Valid Parentheses_________________________________
// function isValid(str){
//     let stack=[];

//     for(let ch of str){
//         if(ch === '(' || ch  === '{' || ch === '['){
//             stack.push(ch);
//         }else{
//             if(stack.length === 0) return false;

//             let top = stack.pop();

//             if(
//                 (ch === ')' && top !== '(') ||
//                 (ch === '}' && top !== '{') ||
//                 (ch === ']' && top !== '')
//             ){
//                 return false;
//             }
//         }
//     }
//      return stack.length === 0;
// }

// console.log(isValid("({[]})"));
// console.log(isValid("(]"))







//____________________________Only Round Brackets Validation___________________________________
function checkBrackets(str){
    let stack=[];

    for(let ch of str){
        if(ch === '('){
            stack.push(ch); 
        } else if(ch === ')'){
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(checkBrackets("(()())"))








//_______________________________Count Minimum Brackets to Balance______________________________-
function minAdd(str){
    let balance = 0;
    let add = 0;

    for(let ch of str){
        if(ch === '('){
            balance++;
        }else{
            if(balance > 0){
                balance--;
            }else{
                add++;
            }
        }
    }

    return add + balance;
}

console.log(minAdd("(()"))







//______________________________Remove Invalid Parentheses__________________________________
function removeInvalid(str){
    let stack = [];
    let arr = str.split('');

    for(let i =0;i<arr.length;i++){
        if(arr[i] === '('){
            stack.push(i);
        }else if (arr[i] === ')'){
            if(stack.length){
                stack.pop();
            }else{
                arr[i] = '';
            }
        }
    }

    while(stack.length){
        arr[stack.pop()] ='';
    }

    return arr.join('');
}

console.log(removeInvalid("a)b(c)d"))








//______________________________Check Nested Expression Depth____________________________
function maxDepth(str){
    let max=0;
    let count=0;

    for(let ch of str){
        if(ch === '('){
            count++;
            max=Math.max(max,count);
        }else if(ch === ')'){
            count--;
        }
    }
    return max;
}
console.log(maxDepth("((()))"))



