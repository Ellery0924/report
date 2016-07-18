var express = require('express');
var router = express.Router();
var getReportData = require('../service').getReport;

var rPath = /\/(\d+)\/([\w_]+)/;

router.get(rPath, function (req, res) {

    var match = req.url.match(rPath),
        date = match[1],
        id = match[2];

    res.render('index', getReportData(date, id));
});

module.exports = router;
