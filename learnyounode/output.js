var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();


var total = 0;
for(var i = 0; i < str.length; i++){
  if(str[i] === '\n'){
    total++;
  }
}
console.log(total);
