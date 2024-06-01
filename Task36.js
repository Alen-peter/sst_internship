const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the number:",(a)=>{

function person(a){
    var result;
    result=a*a;
    return result;
}
var result=person(a);
    console.log(result);
    readline.close();
});