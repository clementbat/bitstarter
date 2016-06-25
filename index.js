var express = require('express')
var app = express()
const fs = require('fs')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
var content;
fs.readFileSync('/index.html', function read(err, data) {content = data;});


app.get('/', function(request, response) {
  response.send(content)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
