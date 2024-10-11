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

         const merge = (left, right) => {
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
        
         const mergeSort = (arr) => {
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
        let l = arr.length;
        const heapify = (i) => {
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            let max = i;
            if (left < l && arr[left][1] > arr[max][1]) max = left;
            if (right < l && arr[right][1] > arr[max][1]) max = right;
            if (max !== i) {
                [arr[max], arr[i]] = [arr[i], arr[max]];
                heapify(max);
            }
        };

        for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(i);
        for (i = arr.length - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            l--;
            heapify(0);
        }
        return arr;
    },
    shell: function (arr) {
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap][1] > temp[1]; j -= gap)
                    arr[j] = arr[j - gap];
                arr[j] = temp;
            }
        }
        return arr;
    },
    quick3: function (arr) {
        const quick3Sort = (arr, low, high)=> {
            if (low >= high) return; 

            let lt = low, 
                gt = high, 
                i = low + 1, 
                pivot = arr[low]; 

            while (i <= gt) {
                if (arr[i][1] < pivot[1]) {
                    [arr[lt], arr[i]] = [arr[i], arr[lt]];
                    lt++;
                    i++;
                } else if (arr[i][1] > pivot[1]) {
                    [arr[gt], arr[i]] = [arr[i], arr[gt]];
                    gt--;
                } else {
                    i++;
                }
            }
            quick3Sort(arr, low, lt - 1);
            quick3Sort(arr, gt + 1, high);
        }
        quick3Sort(arr, 0, arr.length - 1);
        return arr;
    },
    quick: function (arr) {
        const partition = (arr, low, high) => {
            let pivot = arr[high];
            let i = low - 1;

            for (let j = low; j <= high - 1; j++) {
                if (arr[j][1] < pivot[1]) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            return i + 1;
        }

        const quickSort = (arr, low, high) =>{
            if (low >= high) return;
            let pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        } 
        
        quickSort(arr, 0, arr.length - 1);

        return arr;
    },
};

module.exports = sorts;
