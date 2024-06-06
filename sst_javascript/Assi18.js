const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter your numbers:",(a)=>{
readline.question("Enter the same string:",(b)=>{
    if(a==b){
        console.log("The string are equal");
    }
    else
    {
        console.log("The string are not equal");
    }
    readline.close();
});
});