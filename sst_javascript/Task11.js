const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter a  number:",(input)=>{
let number = parseFloat(input);
console.log("initial number:"+number);
console.log("number++"+number++)
console.log(number)

readline.close();
}
);