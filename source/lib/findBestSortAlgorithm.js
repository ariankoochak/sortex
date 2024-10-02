const arrayConditionsList = require("../utils/arrayConditions");
const sorts = require("../utils/sortFuncs")

module.exports = function(arrayCondition,sortAlgorithm){
    try {
        if(typeof sortAlgorithm !== 'undefined'){
            const sortFuncsKeys = Object.keys(sorts);
            if(sortFuncsKeys.includes(sortAlgorithm) === false){
                throw "sortAlgorithm is wrong"
            }
            const resultFunction = sorts[sortAlgorithm];
            return resultFunction;
        }
        else if(typeof arrayCondition !== 'undefined'){
            const arrayConditionKeys = Object.keys(arrayConditionsList);
            if(arrayConditionKeys.includes(arrayCondition) === false){
                throw "arrayCondition is wrong";
            }
            const resultFunction = sorts[arrayConditionsList[arrayCondition]];
            return resultFunction;
        }
    } catch (err) {
        return new Error(err)
    }
}