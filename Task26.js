const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});

    
    readline.question("Enter your name: ",(a)=>{
    readline.question("Enter your age: ",(b)=>{
function mine(){

    console.log("your name: "+a);
    console.log("your age is: "+b)
}
    

    readline.close();
   mine();
    
});
});
