const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the celcius: ",(a)=>{

    let cel=parseFloat(a);

    let fah=cel*9/5+32;

    console.log("fahrenheit is ",fah);
    readline.close();

});