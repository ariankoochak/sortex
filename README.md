# order-js
**order-js** is an open source package created to make it easy to sort arrays based on a specific value contained in each array element. Using this package, you can easily use any sorting algorithm you want. Sort an array and get the best result and perform the fastest sort based on the state of your array.

## install
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):
```sh
$ npm install order-js
```
## Usage
To use order-js, you must call it according to your use of common js or es module

Common JS
```js
const {manualSort} = require('order-js'); //common js

manualSort(StudentList, {valuePath: "score",sortAlgorithm: "quick3",});
```
 

ES Module
```js
import {manualSort} from 'order-js'; //ES Module

manualSort(StudentList, {valuePath: "score",sortAlgorithm: "quick3",});
```
## Features
In the following, you can see how to sort and the features of order-js
### manual sort
`manualSort(arr,options = {arrayCondition : '',sortAlgorithm : '',valuePath : ''})`

In this method, you can manually enter the name of the algorithm that you want to sort with
- ***valuePath*** ➜ In this parameter, you must pass the path of the value that you want the array to be sorted based on as a string to the method.For example, in this array:
    ```js
        [
            {
                name : 'Abbas',
                lastName : 'Elahian',
                result : {
                    score : ['math',20],
                    grade : 12,
                }
            },
            ...
        ]
    ```
    if we want to sort the values ​​of the array based on **result→score→index 1 in score array**, the value of our valuePath will be `result.score.1`.

    ⚠️ **valuePath is required!** ⚠️
    <br>
- **sortAlgorithm** ➜ To this parameter, you must pass the name of the algorithm with which you want the sorting to be done:
    | Algorithm name | sortAlgorithm value |
    |--------|--------|
    | insertion sort      | `insertion`      |
    | selection sort      | `selection`      |
    | bubble sort      | `bubble`      |
    | merge sort      | `merge`      |
    | heap sort      | `heap`      |
    | shell sort      | `shell`      |
    | quick3 sort    | `quick3`      |
    | quick sort      | `quick`      |

    <br>

- **arrayCondition** ➜ With this parameter, you can specify the state of your array so that the best algorithm is selected according to the state of your array and that algorithm is used for sorting.
    
    ・*random* → All values ​​of the array are distributed completely randomly and no particular order can be found in the array
    ・*nearly sorted* → The array is almost ordered, but some values ​​are not in the right place
    ・*reversed* → The array is almost in reverse order, but still some values ​​are not in the right place
    ・*random few unique* → The different values ​​of the array are several numbers that are repeated in different indexes and several values ​​use that number.

    | condition | arrayCondition value |
    |--------|--------|
    | random      | `random`      |
    | nearly sorted      | `nearly-sorted`      |
    | reversed      | `reversed`      |
    | random few unique      | `random-few-unique`      |
#### usage
```js
import {manualSort} from 'order-js';

const StudentList = [
    {
        name: "Abbas",
        lastName: "Elahian",
        score: "20",
    },
    {
        name: "Arian",
        lastName: "Elahi",
        score: "18",
    },
    {
        name: "Hossein",
        lastName: "Elyasipoor",
        score: "19",
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        score: "15.5",
    },
    {
        name: "Reza",
        lastName: "Hosseini",
        score: "11",
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        score: "14",
    },
];

const result = manualSort(StudentList, {valuePath: "score",sortAlgorithm: "quick3",});
/*
result => [
    {
        name: "Reza",
        lastName: "Hosseini",
        score: "11",
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        score: "14",
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        score: "15.5",
    },
    {
        name: "Arian",
        lastName: "Elahi",
        score: "18",
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        score: "19",
    },
    {
        name: "Abbas",
        lastName: "Elahi",
        score: "20",
    },
]
*/
```


### automate sort
`automateSort(arr, options = { valuePath: "" })`

In this method, you only have to enter the path of the value that you want the array to be sorted based on. The method automatically detects the state of the array and selects the best and most optimal algorithm for sorting It performs the sorting algorithm
- ***valuePath*** ➜ In this parameter, you must pass the path of the value that you want the array to be sorted based on as a string to the method.For example, in this array:
    ```js
        [
            {
                name : 'Abbas',
                lastName : 'Elahian',
                result : {
                    score : ['math',20],
                    grade : 12,
                }
            },
            ...
        ]
    ```
    if we want to sort the values ​​of the array based on **result→score→index 1 in score array**, the value of our valuePath will be `result.score.1`.

    ⚠️ **valuePath is required!** ⚠️
#### usage
```js
import {automateSort} from 'order-js';

const StudentList = [
    {
        name: "Abbas",
        lastName: "Elahian",
        score: "20",
    },
    {
        name: "Arian",
        lastName: "Elahi",
        score: "18",
    },
    {
        name: "Hossein",
        lastName: "Elyasipoor",
        score: "19",
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        score: "15.5",
    },
    {
        name: "Reza",
        lastName: "Hosseini",
        score: "11",
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        score: "14",
    },
];

const result = automateSort(StudentList, {valuePath: "score"});
/*
result => [
    {
        name: "Reza",
        lastName: "Hosseini",
        score: "11",
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        score: "14",
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        score: "15.5",
    },
    {
        name: "Arian",
        lastName: "Elahi",
        score: "18",
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        score: "19",
    },
    {
        name: "Abbas",
        lastName: "Elahi",
        score: "20",
    },
]
*/
```


### get specific datas
`getSpecificData(arr,options = {valuePath : ""}`

Suppose you want to have a new array with a certain value of each index. This method will do it for you!
- ***valuePath*** ➜ In this parameter, you must pass the path of the value that you want the array to be sorted based on as a string to the method.For example, in this array:
    ```js
        [
            {
                name : 'Abbas',
                lastName : 'Elahian',
                result : {
                    score : ['math',20],
                    grade : 12,
                }
            },
            ...
        ]
    ```
    if we want to sort the values ​​of the array based on **result→score→index 1 in score array**, the value of our valuePath will be `result.score.1`.

    ⚠️ **valuePath is required!** ⚠️
#### usage
```js
import {getSpecificData} from 'order-js';

const StudentList = [
    {
        name: "Abbas",
        lastName: "Elahian",
        score: "20",
    },
    {
        name: "Arian",
        lastName: "Elahi",
        score: "18",
    },
    {
        name: "Hossein",
        lastName: "Elyasipoor",
        score: "19",
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        score: "15.5",
    },
    {
        name: "Reza",
        lastName: "Hosseini",
        score: "11",
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        score: "14",
    },
];

const result = getSpecificData(StudentList, {valuePath: "score"});
/*
result => ["20","18","19","15.5","11","14"]
*/
```


