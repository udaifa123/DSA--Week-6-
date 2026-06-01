//____________________________________Next Greater element_______________________________
function nextGreater(arr){
    let stack=[];
    let result=Array(arr.length).fill(-1);

    for(let i=0;i<arr.length;i++){
        while(stack.length && arr[i] > arr[stack[stack.length-1]]){
            let idx=stack.pop();
            result[idx]=arr[i];
        }
        stack.push(i)
    }
    return result;
}
console.log(nextGreater([2,1,3,4]))






//_______________________________Daily Temperatures___________________________
function dailyTemp(arr){
    let stack=[];
    let result=Array(arr.length).fill(0);

    for(let i=0;i<arr.length;i++){
        while(stack.length && arr[i] > arr[stack[stack.length-1]]){
            let idx=stack.pop();
            result[idx]=i-idx;
        }
        stack.push(i);
    }
    return result;
}
console.log(dailyTemp([30,40,35,50]))








//______________________________Next Smaller Element__________________________
function nextSmaller(arr){
    let stack=[];
    let result=Array(arr.length).fill(-1);

    for(let i=0;i<arr.length;i++){
        while(stack.length && arr[i] < arr[stack[stack.length - 1]]){
            let idx=stack.pop();
            result[idx]=arr[i];
        }
        stack.push(i)
    }
    return result
}






//__________________________Next Greater Element (Right to Left version)___________________________
function nextGreaterRight(arr){
    let stack=[];
    let res=Array(arr.length).fill(-1);

    for(let i = arr.length -1;i>=0;i--){
        while(stack.length && stack[stack.length-1]<=arr[i]){
            stack.pop();
        }
        if(stack.length){
            res[i]=stack[stack.length-1];
        }
        stack.push(arr[i])
    }
    return res;
}







//____________________________Next Greater Element______________________________
function nextGreater(arr){
    let stack=[];
    let res=new Array(arr.length).fill(-1);

    for(let i=0;i<arr.length;i++){
        while(stack.length && arr[i] > arr[stack[stack.length-1]]){
            let idx=stack.pop();
            res[idx]=arr[i];
        }
        stack.push(i);
    }
    return res;
}
let arr1=[2,1,3,4];
console.log(nextGreater(arr1))








//____________________________________Daily Temperatures__________________________________
function dailyTemp(arr){
    let stack=[];
    let res=new Array(arr.length).fill(0);

    for(let i=0;i<arr.length;i++){
        while(stack.length && arr[i] > arr[stack[stack.length-1]]){
            let idx=stack.pop();
            res[idx]=i-idx;
        }
        stack.push(i);
    }
    return res;
}
let arr2=[30,40,35,50];
console.log(dailyTemp(arr2))







//_________________________________Next Smaller Element________________________________________
function nextSmaller(arr){
    let stack=[];
    let res=new Array(arr.length).fill(-1);

    for(let i=0;i<arr.length;i++){
        while(stack.length && arr[i] < arr[stack[stack.length-1]]){
            let idx=stack.pop();
            res[idx]=arr[i];
        }
        stack.push(i);
    }
    return res;
}
let arr3=[4,5,2,10];
console.log(nextSmaller(arr3))








//_______________________________Largest Rectangle  in Histogram_____________________________
function largestRectangle(heights){
    let stack=[];
    let max=0;

    heights.push(0);

    for(let i=0;i<heights.length;i++){
        while(stack.length && heights[i]<heights[stack[stack.length-1]]){
            let h=heights[stack.pop()];
            let w=stack.length ? i -stack[stack.length -1] - 1 :i;
            max=Math.max(max,h*w);
        }
        stack.push(i);
    }
    return max;
}
let arr4=[2,1,5,6,2,3];
console.log(largestRectangle(arr4))