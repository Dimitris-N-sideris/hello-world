module.exports = function (path, extension, callback) {
  fs = require('fs')
  fs.readdir(path, function directory_filter(err, list){
      if(err)
          return callback(err)
      var data = [];
      var i = 0;
      list.forEach(function (element){
          var splitted = element.split('.')

          if(splitted[splitted.length - 1] == extension && splitted.length > 1) {

                    data[i] = element
                    i++
          }
      })
      callback(null , data)

 })

}
