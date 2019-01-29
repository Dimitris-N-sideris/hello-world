/* HTTP JSON API SERVER (Exercise 13 of 13)

  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.
*/


http    = require('http')
url     = require('url')
date    = new Date()
pathparsetime = '/api/parsetime'
pathunix =      '/api/unixtime'



server = http.createServer(function(req, res){
  parsed_url = url.parse(req.url, true)
  var date    = new Date(parsed_url.query['iso'])
//  console.log(date);
  if(parsed_url.pathname == pathparsetime){

    var obj = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}
  }
  else if(parsed_url.pathname == pathunix){   

    var obj = {unixtime: date.getTime()}

  }
  else{ // error
    return console.log("error wrong url "+parsed_url.pathname );
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(obj));
})

server.listen(Number(process.argv[2]))
