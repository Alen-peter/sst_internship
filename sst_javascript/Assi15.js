const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter the string: ",(a)=>{
readline.question("Enthe ineteger number: ",(b)=>{

    function mine(){
        console.log("Enterd sting: "+(a));
        console.log("Enterd integer: "+(b));
    }
    mine();
    readline.close(); 


});
});