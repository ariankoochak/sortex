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
        for (let i = 0; i < arr.length; i++) {
            let lowest = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[lowest][1] > arr[j][1]) {
                    lowest = j;
                }
            }
            if (i !== lowest) {
                [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
            }
        }
        return arr;
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

        function merge(left, right) {
            let sortedArr = []; // the sorted items will go here
            while (left.length && right.length) {
                // Insert the smallest item into sortedArr
                if (left[0][1] < right[0][1]) {
                    sortedArr.push(left.shift());
                } else {
                    sortedArr.push(right.shift());
                }
            }
            // Use spread operators to create a new array, combining the three arrays
            return [...sortedArr, ...left, ...right];
        }
        
        function mergeSort(arr) {
            // Base case
            if (arr.length <= 1) return arr;
            let mid = Math.floor(arr.length / 2);
            // Recursive calls
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }
        const res = mergeSort(arr)
        return res

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
