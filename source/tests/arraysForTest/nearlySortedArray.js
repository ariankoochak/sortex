const StudentList = [
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
        name: "Arian",
        lastName: "Elahi",
        score: "18",
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        score: "15.5",
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
];

const SortedStudentList = [
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
];
const SortedStudentListWithAlphabet = [
    {
     lastName: "Elahi",
     name: "Abbas",
     "score": "20",
   },
   {
     lastName: "mohammadi",
     "name": "Ali",
     score: "15.5",
   },
   {
     lastName: "Elahi",
     name: "Arian",
     score: "18",
   },
   {
     lastName: "Elahi",
     name: "Hossein",
     score: "19",
   },
   {
     lastName: "Karimi",
     name: "Jafar",
     score: "14",
   },
   {
     lastName: "Hosseini",
     name: "Reza",
     score: "11",
   },
 ]

const UsersDatas = [
    {
        name: "Reza",
        lastName: "Hosseini",
        purchase: {
            purchaseCount: 0,
            purchaseSum: "0",
        },
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 1,
            purchaseSum: "13000000",
        },
    },
    {
        name: "Arian",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 5,
            purchaseSum: "50000000",
        },
    },
    {
        name: "Abbas",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 3,
            purchaseSum: "23000000",
        },
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        purchase: {
            purchaseCount: 6,
            purchaseSum: "21000000",
        },
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        purchase: {
            purchaseCount: 8,
            purchaseSum: "53000000",
        },
    },
];

const SortedUsersDatas = [
    {
        name: "Reza",
        lastName: "Hosseini",
        purchase: {
            purchaseCount: 0,
            purchaseSum: "0",
        },
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 1,
            purchaseSum: "13000000",
        },
    },
    {
        name: "Abbas",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 3,
            purchaseSum: "23000000",
        },
    },
    {
        name: "Arian",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 5,
            purchaseSum: "50000000",
        },
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        purchase: {
            purchaseCount: 6,
            purchaseSum: "21000000",
        },
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        purchase: {
            purchaseCount: 8,
            purchaseSum: "53000000",
        },
    },
];

const UsersDatasArrayMode = [
    {
        name: "Reza",
        lastName: "Hosseini",
        purchase: [0, "0"],
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        purchase: [1, "13000000"],
    },
    {
        name: "Abbas",
        lastName: "Elahi",
        purchase: [3, "23000000"],
    },
    {
        name: "Arian",
        lastName: "Elahi",
        purchase: [5, "50000000"],
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        purchase: [8, "53000000"],
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        purchase: [6, "21000000"],
    },
];

const SortedUsersDatasArrayMode = [
    {
        name: "Reza",
        lastName: "Hosseini",
        purchase: [0, "0"],
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        purchase: [1, "13000000"],
    },
    {
        name: "Abbas",
        lastName: "Elahi",
        purchase: [3, "23000000"],
    },
    {
        name: "Arian",
        lastName: "Elahi",
        purchase: [5, "50000000"],
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        purchase: [6, "21000000"],
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        purchase: [8, "53000000"],
    },
];

const nestedArray = [
    ["Reza", "Hosseini", ["11"]],
    ["Ali", "mohammadi", ["15.5"]],
    ["Jafar", "Karimi", ["14"]],
    ["arian", "Elahi", ["18"]],
    ["Hossein", "Elahi", ["19"]],
    ["Abbas", "Elahi", ["20"]],
];

const SortedNestedArray = [
    ["Reza", "Hosseini", ["11"]],
    ["Jafar", "Karimi", ["14"]],
    ["Ali", "mohammadi", ["15.5"]],
    ["arian", "Elahi", ["18"]],
    ["Hossein", "Elahi", ["19"]],
    ["Abbas", "Elahi", ["20"]],
];

module.exports = {
    StudentList,
    SortedStudentList,
    SortedStudentListWithAlphabet,
    UsersDatas,
    SortedUsersDatas,
    UsersDatasArrayMode,
    SortedUsersDatasArrayMode,
    nestedArray,
    SortedNestedArray,
};
