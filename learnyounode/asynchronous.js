var fs = require('fs')


function readData(){
  fs.readFile(process.argv[2], 'utf8', finishReading)

}

function finishReading(err, buffer) {
  var total = 0

  if (err) console.log(err)

  else{
    total = buffer.split('\n').length - 1
    console.log(total)
  }

}


readData()
