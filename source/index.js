const analyzeArrayCondition = require("./lib/analyzeArrayCondition");
const errorCatching = require("./lib/errorCatching");
const findBestSortAlgorithm = require("./lib/findBestSortAlgorithm");
const generateMainArr = require("./lib/generateMainArr");
const optimizeArray = require("./lib/optimizeArray");

function manualSort(arr,options = {arrayCondition : '',sortAlgorithm : '',valuePath : ''}){
    try {
        const { arrayCondition, sortAlgorithm, valuePath} = options;

        const error = errorCatching(arr,arrayCondition,sortAlgorithm,valuePath);
        if (error !== undefined) {
            throw new Error(error);
        }
        
        const sortFunction = findBestSortAlgorithm(arrayCondition,sortAlgorithm);
        const optimizedArray = optimizeArray(arr,valuePath);
        
        const sortedOptimizedArray = sortFunction(optimizedArray);
        const result = generateMainArr(arr,sortedOptimizedArray);

        return result
        
    } catch (err) {
        return new Error(err)
    }
}

function automateSort(arr, options = { valuePath: "" }) {
    try {
        const {sortAlgorithm, valuePath } = options;

        const arrayCondition = analyzeArrayCondition(arr);

        const error = errorCatching(arr,arrayCondition,sortAlgorithm,valuePath);
        if (error !== undefined) {
            throw new Error(error);
        }

        const sortFunction = findBestSortAlgorithm(
            arrayCondition,
            sortAlgorithm
        );
        const optimizedArray = optimizeArray(arr, valuePath);

        const sortedOptimizedArray = sortFunction(optimizedArray);
        const result = generateMainArr(arr, sortedOptimizedArray);

        return result;
    } catch (err) {
        return new Error(err);
    }
}



// const res = manualSort(StudentList, { sortAlgorithm: "bubble", valuePath: "score" });
// console.log(res);


module.exports = {
    manualSort,
    automateSort,
}



