const findValue = require("./findValue");

module.exports = function (arr, valuePath) {
    if (valuePath === "0") {
        return arr
    }

    const rtnArray = [];
    for (let i = 0; i < arr.length; i++) {
        let compareData;
        if (typeof valuePath !== "undefined") {
            compareData = findValue(arr[i], valuePath);
        } else {
            compareData = arr[i];
        }
        rtnArray.push(compareData);
    }
    return rtnArray;
};
