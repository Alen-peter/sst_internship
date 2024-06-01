const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
    readline.question("Enter first  number: ",(a)=>{
    readline.question("Enter second number: ",(b)=>{

        parseInt(a)
        parseInt(b)

    function mine(){
    let c;
    c=a*b;
        console.log("The value is: ",c);
}
    mine();
    readline.close();
});
});