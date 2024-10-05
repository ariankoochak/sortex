const arrayConditionsList = require("../utils/arrayConditions");
const sorts = require("../utils/sortFuncs");
const findValue = require("./findValue");

module.exports = function (mainArr, arrayCondition, sortAlgorithm, valuePath) {
    try {
        //arrayCondition error catching
        if (typeof arrayCondition !== "undefined") {
            const arrayConditionKeys = Object.keys(arrayConditionsList);
            if (arrayConditionKeys.includes(arrayCondition) === false) {
                throw "arrayCondition is wrong";
            }
        }

        //sortAlgorithm error catching
        if (typeof sortAlgorithm !== "undefined") {
            const sortFuncsKeys = Object.keys(sorts);
            if (sortFuncsKeys.includes(sortAlgorithm) === false) {
                throw "sortAlgorithm is wrong";
            }
        }

        //valuePath & mainArr error catching
        if (Array.isArray(mainArr) === false || mainArr.length === 0) {
            throw "please enter valid array for sort";
        }

        if(typeof valuePath === 'undefined'){
            throw "please enter value path"
        }

        const arrayDataType = typeof mainArr[0];
        for (const value of mainArr) {
            if (typeof value !== arrayDataType) {
                throw "all array indexes must be of the same type";
            }
            if ( typeof findValue(value, valuePath) === "undefined") {
                throw "value for compare was not found in one of index in array";
            }
        }
    } catch (err) {
        return new Error(err);
    }
};