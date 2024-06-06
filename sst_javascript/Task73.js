function haspropretty(obj,prop){
    for(var key in obj){
        if(key===prop){
            return true;
        }
    }
    return false;
}
var person={
    name:"John",
    age:30,
    occupation:"Engineer",
};
var res=haspropretty(person,"name");
if(res==true)
    {
        console.log("Present");
    }
    else
    {
        console.log("Not present");
    }