var concat = require('concat-stream');

  process.stdin.pipe(concat(reverse));


  function reverse(data){

      var newdata = data.toString().split('').reverse().join('');
      console.log(newdata);
  }
