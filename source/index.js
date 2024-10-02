const errorCatching = require("./lib/errorCatching");
const findBestSortAlgorithm = require("./lib/findBestSortAlgorithm");
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
        
        
        
    } catch (err) {
        return new Error(err)
    }
}


const testArr = [
    [[1, [3], [[0, 5], 3, 4]], ["sd"], ["as"]],
    [[1, [5], [[4, 3], 1, 2]], ["da"], ["df"]],
    [[1, [2], [[-1, 2], 9, 1]], ["12"], ["jk"]],
];

manualSort(testArr,{arrayCondition : 'random',nestedArrayIndex : '0.2.0.1'})



