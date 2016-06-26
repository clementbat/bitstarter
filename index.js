var express = require('express')
var app = express()
const fs = require('fs')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var content;

fs.readFile('/index.html', (err, data) => {
if (err) throw err;
console.log(data);
content = data;
console.log(content);
})

content = content.toString('utf8');

app.get('/', function(request, response) {
  response.send(content);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
