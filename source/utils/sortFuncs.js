const sorts = {
    insertion: function (arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;

            while (j >= 0 && arr[j][1] > key[1]) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
    },
    selection: function (arr) {
        console.log(arr);
    },
    bubble: function (arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j][1] > arr[j + 1][1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },
    merge: function (arr) {
        console.log(arr);
    },
    heap: function (arr) {
        console.log(arr);
    },
    shell: function (arr) {
        console.log(arr);
    },
    quick3: function (arr) {
        console.log(arr);
    },
    quick: function (arr) {
        console.log(arr);
    },
};

module.exports = sorts;
