var split = require('split');
var through2 = require('through2');
var line_number = 1;
process.stdin.pipe(split()).through2(write);


function write(line, type, next){
    if (line_number%2 == 0){
        this.push(line.toString().toUpperCase())
    }
    else{
        this.push(line.toString().toLowerCase())
    }
    next();
}

function end(done){
  
}
