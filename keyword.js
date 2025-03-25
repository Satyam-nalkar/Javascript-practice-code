//globle - window
console.log(this);
 
//fuction - widow
function abcd(){
    console.log(this)
}
abcd();
// method-object 
var obj = {
    name:function(){
        console.log(this.age);
    },
    age:25,email:"abcd"
}
obj.name();
var obj2={
    sayName:function(){
        console.log(this);
        function childfun(){
            console.log(this);
        }
        childfun();
    },
    age:25
}
obj2.sayName();
//fun inside method (es6) - object
 var obj3 = {
    sayName:function(){
        const child = ()=>{
            console.log(this);
        }
        child();
    }
 }
obj3.sayName();
//constructor function value value -new blank object
function add(){
    console.log(this);
} 
const ans = new add();

//even listener
document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
})
