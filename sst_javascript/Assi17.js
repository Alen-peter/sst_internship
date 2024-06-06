const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the length:",(a)=>{
readline.question("Enter the breadth:",(b)=>{
    num1=parseFloat(a)
    num2=parseFloat(b)
function mine(){
    let result=num1*num2;
    console.log("result",result);
}
mine();
readline.close();
});
});