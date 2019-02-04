//var express = require('express');
//var app = express();
//
//app.get('/', function(req, res){
//   res.send("Hallo  to the world!");
//});
//
//app.listen(3000);
//function posneg(){
//var numbers=prompt("Enter not more than four 4 numbers.");
//    for(i=0; i<=4; i++){
//        
//    }
//    
//}
//posneg();
function spinWords(str){
  var strArr = str.split(' ');
  
  strArr.forEach(function(word, index) {
    if (word.length >= 5) {
      strArr[index] = word.split('').reverse().join('');
    }
  })
  return strArr.join(' ');
}

console.log(spinWords( "Hey fellow warriors" )); // "Hey wollef sroirraw" 
console.log(spinWords( "This is a test")); // "This is a test" 
console.log(spinWords( "This is another test" )); // "This is rehtona test"