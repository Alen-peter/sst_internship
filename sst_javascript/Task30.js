const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the length: ",(a)=>{
readline.question("Enter the breadth: ",(b)=>{

        // parseInt(a)
        // parseInt(b)
        function mine(num1,num2){
            let c;
            c=num1*num2;
        }
        console.log("The value is: "+c);
        
        mine();
        readline.close();
});
});