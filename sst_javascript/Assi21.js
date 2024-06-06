const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter a desimel value:",r=>{
    function person(x){
        var result;
        result=parseInt(x)
        return result;
    }
    let result=person(r);
    console.log(result);
    readline.close();
});