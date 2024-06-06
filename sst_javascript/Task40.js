const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter your name:",(a)=>{

        const name=function(x){
            let z=("Hello "+x+"!!");
            return z;
        }
        let c=name(a)
        console.log(c);
        readline.close();
});