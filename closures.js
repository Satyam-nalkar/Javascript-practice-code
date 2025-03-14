// //closures 
// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// var fnc= counter();
// fnc();

// function abcd(){
//     var a=12;
//     return function(){
//         console.log(a);
//     }
// }
// var ans = abcd();
// ans(); 
function timer(){
    var a=12;
    return setTimeout(function(){
       console.log(a);
},  2000)
}
    var ans = timer();