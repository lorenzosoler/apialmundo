var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

var HotelesCtrl = require('./controllers/hoteles');

// API routes
var hoteles = express.Router();

hoteles.route('/hoteles')
  .get(HotelesCtrl.getAllHoteles);

hoteles.route('/hoteles/stars/:stars')
  .get(HotelesCtrl.findByStars);

app.use('/api', hoteles);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});