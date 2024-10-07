const analyzeArrayCondition = require("./lib/analyzeArrayCondition");
const isWrongDatas = require("./lib/isWrongDatas");
const findBestSortAlgorithm = require("./lib/findBestSortAlgorithm");
const generateMainArr = require("./lib/generateMainArr");
const optimizeArray = require("./lib/optimizeArray");
const {StudentList} = require('./tests/arraysForTest/randomArray')

function manualSort(arr,options = {arrayCondition : '',sortAlgorithm : '',valuePath : ''}){
    try {
        const { arrayCondition, sortAlgorithm, valuePath} = options;

        const isHaveError = isWrongDatas(arr,arrayCondition,sortAlgorithm,valuePath);

        if (isHaveError === true) {
            throw Error
        }
        
        const sortFunction = findBestSortAlgorithm(arrayCondition,sortAlgorithm);
        const optimizedArray = optimizeArray(arr,valuePath);
        
        const sortedOptimizedArray = sortFunction(optimizedArray);
        const result = generateMainArr(arr,sortedOptimizedArray);

        return result
        
    } catch (err) {
        return []
    }
}

function automateSort(arr, options = { valuePath: "" }) {
    try {
        const {sortAlgorithm, valuePath } = options;

        const optimizedArray = optimizeArray(arr, valuePath);

        const arrayCondition = analyzeArrayCondition(optimizedArray);

        const error = errorCatching(arr,arrayCondition,sortAlgorithm,valuePath);
        if (error !== undefined) {
            throw new Error(error);
        }

        const sortFunction = findBestSortAlgorithm(
            arrayCondition,
            sortAlgorithm
        );

        const sortedOptimizedArray = sortFunction(optimizedArray);
        const result = generateMainArr(arr, sortedOptimizedArray);

        return result;
    } catch (err) {
        return new Error(err);
    }
}



// const res = manualSort(StudentList, { sortAlgorithm: "bubble", valuePath: "score" });
// const res = manualSort([3,4,2],{sortAlgorithm : "bubble",valuePath : "score"});
// const res = manualSort(StudentList,{sortAlgorithm : "bubble",valuePath : "score"});

console.log(res);


module.exports = {
    manualSort,
    automateSort,
}



