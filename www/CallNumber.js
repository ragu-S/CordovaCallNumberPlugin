
var exec = require("cordova/exec");

module.exports = {
    callNumber: function(success, failure, number, bypassAppChooser) {
        exec(success, failure, "CallNumber", "callNumber", [number, bypassAppChooser]);
    }
}
