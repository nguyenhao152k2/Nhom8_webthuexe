var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
// Cấu hình body-Parse
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

require('./routes/ProductRoute')(app);
require('./routes/OrderCarRoute')(app);
require('./routes/MyTripRoute')(app);

app.listen(3001, () => { 
    console.log("Ứng dụng đang chạy tại port: http://localhost:3001");
});