const check=(x)=>{

if (x%2==0){
    let res=x+" is even";
    return res;    
}
else{
    let res=x+" is odd";
    return res;
}
}
let y=check(8);
console.log(y);