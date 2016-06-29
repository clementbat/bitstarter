var express = require('express')
var app = express()
const fs = require('fs')

var content = new Buffer(30000);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

fs.readFile('index.html', 'utf8', (err, data) => {
if (err) throw err;
content.write(data);
app.get('/', function(request, response) {
  response.send(data);
})
})

content.toString('utf8');

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
