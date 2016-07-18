/**
 * Created by Ellery1 on 16/7/9.
 */
var path = require('path'),
    fs = require('fs');

module.exports = {
    getReport: function (date, id) {

        var filePath = path.resolve(__dirname, '..', 'report_data', date, id) + ".json";
        return JSON.parse(fs.readFileSync(filePath, "utf8"));
    }
};