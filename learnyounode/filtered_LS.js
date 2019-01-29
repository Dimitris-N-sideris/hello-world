/* Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a directory
  name as the first argument to your program (e.g. '/path/to/dir/') and a
  file extension to filter by as the second argument.

  For example, if you get 'txt' as the second argument then you will need to
  filter the list to only files that end with .txt. Note that the second
  argument will not come prefixed with a '.'.

  The list of files should be printed to the console, one file per line. You
  must use asynchronous I/O. */
fs = require('fs')
//path = require('path')

var path      = process.argv[2]   // directory to filter
var extension = process.argv[3]   // extension type to show

if( path == undefined || extension == undefined){
  console.log('please input 2 correct arguments')
}
//callback
  function directory_filter(err, list){

    if(err)
        console.log('error: '+ err)

    else{

        for(var i = 0; i < list.length; i++){
            var splitted = list[i].split('.')

            if(splitted[splitted.length - 1] == extension && splitted.length > 1) {

                console.log(list[i]);
            }
        }
    }
  }

fs.readdir(path, directory_filter)
