const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question("Enter first number: ",(a)=>{
readline.question("Enter second number: ",(b)=>{
    num1=parseFloat(a)
    num2=parseFloat(b)

    function mine(){
        let result=(num1+num2)/2
        console.log("average"+result);
    }
    mine();
    readline.close();

});
});