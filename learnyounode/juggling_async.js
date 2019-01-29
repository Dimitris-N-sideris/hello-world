/*This problem is the same as the get_request2.js in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments. */



  http = require('http')

  // improved
  var results = ['','','']
  var count = 0

function printData(){
  results.forEach(function(element){
    console.log(element)
  })

}

  function httpGet(index){
    function callback(response){
      response.setEncoding('utf8');
      response.on("data", function (serverData){
        results[index] += serverData
      })
      response.on("end", function (){
        count++
        if(count == 3){
          printData()
        }
      })
    }
    http.get(process.argv[2+index], callback)
  }

  for (var i = 0; i < 3; i++) {
      httpGet(i)
    }

  /*1st solution
  http.get(url1, callback1)
  http.get(url2, callback2)
  http.get(url3, callback3)


  url1 = process.argv[2]
  url2 = process.argv[3]
  url3 = process.argv[4]

  var data = ['','','']
  var flag1 = 0
  var flag2 = 0
  var flag3 = 0
  function callback1(response){
    response.setEncoding('utf8');
    response.on("data", function (serverData){
      data[0] += serverData
    })
    response.on("end", function (){
      flag1 = 1;
      if(flag2 == 1 && flag3 ==1){
        printData()
      }
    })
  }
  function callback2(response){
    response.setEncoding('utf8');
    response.on("data", function (serverData){
      data[1] += serverData
    })
    response.on("end", function (){
      flag2 = 1;
      if(flag1 == 1 && flag3 ==1){
        printData()
      }
    })
  }
  function callback3(response){
    response.setEncoding('utf8');
    response.on("data", function (serverData){
      data[2] += serverData
    })
    response.on("end", function (){
      flag3 = 1;
      if(flag2 == 1 && flag1 == 1){
        printData()
      }
    })
  }*/
