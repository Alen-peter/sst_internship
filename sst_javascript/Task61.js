let courses=["HTML","CSS","Javascript","React","node.js","c++"];
console.log("OriginalArray:" +courses);

// let lastElement=courses.pop();
// console.log("After removed the first Element:" +courses);

// let firstElement=courses.shift();
// console.log("After remove the first element:"+courses);

courses.splice(1,4);
console.log("After removed 2 elements starting from index:"+courses);