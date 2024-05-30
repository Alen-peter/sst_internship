const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter the first number:",(a)=>{
readline.question("enter the second number:",(b) =>{

    const sum=parseInt(a)+parseInt(b);
    var substraction=a-b;
    var multiplication=a*b;
    var division=a/b;

    console.log("sum is "+sum);
    console.log("substraction is "+substraction);
    console.log("multiplication is "+multiplication);
    console.log("division is "+division);

    readline.close();
});
});