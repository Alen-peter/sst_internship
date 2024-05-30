const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("who are you..?\n",(name)=>
readline.question("how old are you..?\n",(age)=>     
{
    console.log("hey there "+name+"!");
    console.log("oh your age is- "+age+"!");
    readline.close();
}
)
);