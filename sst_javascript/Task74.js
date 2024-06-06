const person={
    firstname:"John",
    lastname:"Doe",

    fullname:function(){
        return this.firstname+" "+this.lastname;
    }
}
const member={
    firstname:"Hedge",
    lastname:"Nilsen",
}
let fullname=person.fullname.bind(member);
console.log(fullname());