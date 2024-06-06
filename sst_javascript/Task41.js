let a= 'Malayalam';
const pal=function(x){
    let z=x.split('').reverse().join('');

    if(x==z){
        let res=(x+" is palindrome");
        return res;
    }
    else{
        let res=(x+" is not palindrome");
        return res;
    }
};
let c=pal(a);
console.log(c);