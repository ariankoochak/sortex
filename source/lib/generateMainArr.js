module.exports = function(mainArr,sortedOptimizedArr){
    const rtnArr = []
    for(const index of sortedOptimizedArr){
        rtnArr.push(mainArr[index[0]]);
    }
    return rtnArr;
}