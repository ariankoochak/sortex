module.exports = function(arr){
    const biggest = [...arr[0]]
    for(const i of arr){
        if(i[1] > biggest[1]){
            biggest[0] = i[0];
            biggest[1] = i[1];
        }
    }
    return biggest
}