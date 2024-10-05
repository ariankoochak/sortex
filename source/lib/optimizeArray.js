const findValue = require("./findValue");

module.exports = function (arr, valuePath) {
    const rtnArray = []
    for(let i = 0; i < arr.length;i++){
        let compareData;
        if (typeof valuePath !== "undefined") {
            compareData = findValue(arr[i], valuePath);
        } 
        else {
            compareData = arr[i];
        }
        const pushArr = [i,compareData];
        rtnArray.push(pushArr)
    }
    return rtnArray;
};