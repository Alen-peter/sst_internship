const person={
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+","+city+","+country;
    }
}
const person1={
    firstName:"Alen",
    lastName:"Peter",
}
console.log(person.fullName.call(person1,"India","Norway"));