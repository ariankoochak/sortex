function findIndex(arr, nestedArrayIndex) {
    let nestedArrayIndexArr = nestedArrayIndex.split(".");
    let pointer = arr[nestedArrayIndexArr[0]];

    nestedArrayIndexArr = nestedArrayIndexArr.map((value) => {
        return Number(value);
    });

    for (let i = 1; nestedArrayIndexArr.length > i; i++) {
        if (!pointer[nestedArrayIndexArr[i]]) {
            return undefined;
        }
        pointer = pointer[nestedArrayIndexArr[i]];
    }
    return pointer;
}

module.exports = findIndex;
