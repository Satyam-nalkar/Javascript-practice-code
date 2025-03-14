// const obj = {name:"harsh"} 
// function abcd(){
//     console.log(this);
// }
// abcd.call(obj);

// const obj = {name:"harsh"} 
// function abcd(a,b,c){
//     console.log(this,a,b,c);
// }
// abcd.apply(obj,[1,2,3]);

//bind
const obj = {name:"harsh"} 
function abcd(){
    console.log(this);
}
const nantersathi = abcd.bind(obj);
nantersathi();
 