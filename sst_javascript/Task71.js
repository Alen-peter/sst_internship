const person={
    fullname:function(city,country){
        return this.firstname+" "+this.lastname+","+city+","+country;
    }
}
const person1={
    firstname:"Alen",
    lastname:"Peter",
}
console.log(person.fullname.apply(person1,["India","Norway"]));