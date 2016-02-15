
var exec = require("cordova/exec");

module.exports = {
    callNumber: function(success, failure, number, bypassAppChooser) {
        cordova.exec(success, failure, "CallNumber", "callNumber", [number, bypassAppChooser]);
    }
}
