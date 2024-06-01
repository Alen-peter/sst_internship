const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter the radius:",(r)=>{
    function person(x){
    var result;
    result=Math.PI*Math.pow(r,2);
    return result;
    }
    let result=person(r);
    console.log(result);
    readline.close();
});
