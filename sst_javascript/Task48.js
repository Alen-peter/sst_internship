function applyOperation(value,operation){
    return operation(value);
}
function double(num){
    return num*2;
}
console.log(applyOperation(4,double));