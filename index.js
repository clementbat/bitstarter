var express = require('express')
var app = express()
const fs = require('fs')

var content = new Buffer(30);

fs.readFile('/index.html', (err, data) => {
if (err) throw err;
console.log(data);
content.write(data);
console.log(content);
})

content.toString('utf8');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(content);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
