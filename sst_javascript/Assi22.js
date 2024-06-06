const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
        readline.question("Enter your birth year:",(y)=>{

    const today=new Date();
    let age=today.getFullYear()-y;
        console.log("your age is:",age);

            readline.close();
        });
 