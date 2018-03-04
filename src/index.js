module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var stackRest = [];
  var str = str.split('');
let openBracket;
let closeBracket;
var openIndex = 0;
var closeIndex = 0;

 for (var p = 0; p < bracketsConfig.length; p++){

for (var i = 0; i < str.length ; i++) {
  openIndex = str.indexOf( bracketsConfig[p][0], i );
  i = openIndex;
  if (openIndex >= 0)  {
      stack.push(bracketsConfig[p][0]);
      }
  else {
      break;
  }        
 
}
 
  for (var j = 0; j < str.length; j++ ) {
     
      closeIndex = str.indexOf( bracketsConfig[p][1], j );
      j = closeIndex;
  
  if ((str.indexOf (bracketsConfig[p][1], j) !== -1) && stack.length == 0) stackRest.push(bracketsConfig[p][1]);

  if ((str.indexOf (bracketsConfig[p][1], j) !== -1) )  stack.pop();
  
  if ((bracketsConfig[p][1], j) == -1 ) break;
  
}

 }
 if (stack.length === 0 && stackRest.length === 0 )   {
 return true;
 }
 else {
 return false;
 }
}
