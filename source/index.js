const analyzeArrayCondition = require("./lib/analyzeArrayCondition");
const checkError = require("./lib/checkError");
const findBestSortAlgorithm = require("./lib/findBestSortAlgorithm");
const findBiggestValue = require("./lib/findBiggestValue");
const findSmallestValue = require("./lib/findSmallestValue");
const generateMainArr = require("./lib/generateMainArr");
const getSpecificArray = require("./lib/getSpecificArray");
const optimizeArray = require("./lib/optimizeArray");
/**
 * 
 * @param {Object} options 
 * @param {"random" | "nearly-sorted" | "reversed" | "random-few-unique"} options.arrayCondition 
 * @param {"insertion" | "selection" | "bubble" | "merge" | "heap" | "shell" | "quick3" | "quick"} options.sortAlgorithm 
 * @returns {Array}
 */
function manualSort(arr,options = {arrayCondition : '',sortAlgorithm : '',valuePath : ''}){
    try {
        const { arrayCondition, sortAlgorithm, valuePath} = options;

        checkError(arr, arrayCondition, sortAlgorithm, valuePath);
        
        const sortFunction = findBestSortAlgorithm(arrayCondition,sortAlgorithm);
        const optimizedArray = optimizeArray(arr,valuePath);
        
        const sortedOptimizedArray = sortFunction(optimizedArray);
        const result = generateMainArr(arr,sortedOptimizedArray);

        return result
        
    } catch (err) {
        return [err.message]
    }
}

function automateSort(arr, options = { valuePath: "" }) {
    try {
        const {sortAlgorithm, valuePath } = options;

        const optimizedArray = optimizeArray(arr, valuePath);

        const arrayCondition = analyzeArrayCondition(optimizedArray);

        checkError(arr,arrayCondition,sortAlgorithm,valuePath);

        const sortFunction = findBestSortAlgorithm(
            arrayCondition,
            sortAlgorithm
        );

        const sortedOptimizedArray = sortFunction(optimizedArray);
        const result = generateMainArr(arr, sortedOptimizedArray);

        return result;
    } catch (err) {
        return [err.message];
    }
}

function getSpecificData(arr,options = {valuePath : ""}){
    try {
        const {valuePath} = options;
        const rtnArr = getSpecificArray(arr,valuePath);
        return rtnArr;
    } catch (err) {
        return [err.message]
    }
}

function getBiggest(arr,options = {valuePath : ""}){
    try {
        const {valuePath} = options;
        const optimizedArray = optimizeArray(arr, valuePath);
        const smallestDataIndex = findBiggestValue(optimizedArray)[0];
        return arr[smallestDataIndex];
    } catch (err) {
        return [err.message]
    }
}

function getSmallest(arr,options = {valuePath: ""}){
    try {
        const { valuePath } = options;
        const optimizedArray = optimizeArray(arr, valuePath);
        const smallestDataIndex = findSmallestValue(optimizedArray)[0];
        return arr[smallestDataIndex];
    } catch (err) {
        return [err.message]
    }
}


module.exports = {
    manualSort,
    automateSort,
    getSpecificData,
    getBiggest,
    getSmallest,
};



