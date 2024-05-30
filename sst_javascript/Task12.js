const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter a number:",(a)=>{
readline.question("enter second number:",(b)=>{
    parseInt(a);
    parseInt(b);
    
    console.log("comparison operators:");
    console.log("a==b",a==b)
    console.log("a!=b",a!=b)
    console.log("a===b",a===b)
    console.log("a!==b",a!==b)
    console.log("a>b",a>b)
    console.log("a<b",a<b)
    console.log("a>=b",a>=b)
    console.log("a<=b",a<=b)


    readline.close();
});
});