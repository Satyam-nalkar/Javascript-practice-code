// prototypal inhritance
function makeHuman(name,age){
    this.name = name;
    this.age = age;
}
makeHuman.prototype.printMyName = function(){
    console.log(this.name);
}
const human1 = new makeHuman("harsh",25);
const human2 = new makeHuman("harshita",34);