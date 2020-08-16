'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
const bodyParser = require('body-parser')



// require and use "multer"...

var app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
   var fileName = req.file.originalname;
  var size= req.file.size;
 res.json({filename:fileName, size:size})
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
