module.exports = function(arr){
    const smallest = [-1,Infinity]
    for(const i of arr){
        if(i[1] < smallest[1]){
            smallest[0] = i[0];
            smallest[1] = i[1];
        }
    }
    return smallest
}