const findIndex = require("./findIndex");
const findKey = require("./findKey");

module.exports = function (arr, keyOfObject, nestedArrayIndex) {
    const rtnArray = []
    for(let i = 0; i < arr.length;i++){
        let compareData;
        if(typeof keyOfObject !== 'undefined'){
            compareData = findKey(arr[i],keyOfObject);
        }
        else if(typeof nestedArrayIndex !== 'undefined'){
            compareData = findIndex(arr[i],nestedArrayIndex);
        }
        else{
            compareData = arr[i];
        }
        const pushArr = [i,compareData];
        rtnArray.push(pushArr)
    }
    return rtnArray;
};