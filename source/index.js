const errorCatching = require("./lib/errorCatching");
const findBestSortAlgorithm = require("./lib/findBestSortAlgorithm");
const generateMainArr = require("./lib/generateMainArr");
const optimizeArray = require("./lib/optimizeArray");

function manualSort(arr,options = {arrayCondition : '',sortAlgorithm : '',keyOfObject : '',nestedArrayIndex : undefined}){
    try {
        const { arrayCondition, sortAlgorithm, keyOfObject ,nestedArrayIndex} = options;

        const error = errorCatching(arr,arrayCondition,sortAlgorithm,keyOfObject,nestedArrayIndex);
        if (error !== undefined) {
            throw new Error(error);
        }
        
        const sortFunction = findBestSortAlgorithm(arrayCondition,sortAlgorithm);
        const optimizedArray = optimizeArray(arr,keyOfObject,nestedArrayIndex);
        
        const sortedOptimizedArray = sortFunction(optimizedArray);
        const result = generateMainArr(arr,sortedOptimizedArray);

        return result
        
    } catch (err) {
        return new Error(err)
    }
}



// const res = manualSort(StudentList, { sortAlgorithm: "bubble", keyOfObject: "score" });
// console.log(res);


module.exports = {
    manualSort,
}



