const greet=function(name){
    return "Hello"+name+"!";
};
function displayGreeting(greetingfunction){
    console.log(greetingfunction("John"));
}
console.log(greet("Alice"));
displayGreeting(greet);