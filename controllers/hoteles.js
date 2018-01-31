var where = require("lodash.where");
var data = require('../data');
//GET - Return all hoteles
exports.getAllHoteles = function(req, res) {
    res.send(data)
};

exports.findByStars = function(req, res) {
    let stars = parseInt(req.params.stars);
    let filtered = where(data, {"stars": stars});
    res.send(filtered)
}