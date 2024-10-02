const arrayConditionsList = require("../utils/arrayConditions");
const sorts = require("../utils/sortFuncs");
const findIndex = require("./findIndex");
const findKey = require("./findKey");

module.exports = function (mainArr,arrayCondition,sortAlgorithm,keyOfObject,nestedArrayIndex){
    try {
        
        //arrayCondition error catching
        if( typeof arrayCondition !== 'undefined'){
            const arrayConditionKeys = Object.keys(arrayConditionsList);
            if (arrayConditionKeys.includes(arrayCondition) === false) {
                throw "arrayCondition is wrong";
            }
        }
        
        //sortAlgorithm error catching
        if(typeof sortAlgorithm !== 'undefined'){
            const sortFuncsKeys = Object.keys(sorts);
            if (sortFuncsKeys.includes(sortAlgorithm) === false) {
                throw "sortAlgorithm is wrong";
            }
        }
        
        //keyOfObject & nestedArrayIndex & mainArr error catching
        if(Array.isArray(mainArr) === false || mainArr.length === 0){
            throw "please enter valid array for sort"
        }
        
        if(typeof keyOfObject !== 'undefined' && typeof nestedArrayIndex !== 'undefined'){
            throw "It is not possible to set value both keyOfObject and nestedArrayIndex";
        }
        
        const arrayDataType = typeof mainArr[0];
        for(const value of mainArr){
            if(typeof value !== arrayDataType){
                throw "all array indexes must be of the same type";
            }
            if (typeof keyOfObject !== "undefined" && typeof findKey(value,keyOfObject) === 'undefined') {
                throw "keyOfObject was not found in one of the objects in array";
            }
            if(typeof nestedArrayIndex !== 'undefined' && typeof findIndex(value,nestedArrayIndex) === 'undefined'){
                throw "index was not found in one of the arrays in main array";
            }
        }
        
    } catch (err) {
        return new Error(err)
    }
}