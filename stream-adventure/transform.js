var through = require('through2');
var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);

function write (buffer, encoding, next) {
        // `write` function is called for every buffer of available input
        this.push(buffer.toString().toUpperCase());
        next();
}

function end (done) {
           // `end` function is called when there is no more data
           done()
}
