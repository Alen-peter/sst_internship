const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("Enter your name:",(a)=>{
    readline.question("Enter your roll number:",(b)=>{
        readline.question("Enter your age:",(c)=>{
            readline.question("Enter your class:",(d)=>{

                const student={
                    name:a,
                    roll:b,
                    age:c,
                    class:d,

                    details:function(){
                        console.log("\nName: "+student.name);
                        console.log("roll num: "+student.roll);
                        console.log("age: "+student.age);
                        console.log("class: "+student.class);
                    }
                };
                student.details();
                readline.close();
            });
        });
    });
});