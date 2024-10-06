const StudentList = [
    {
        name: "Abbas",
        lastName: "Elahi",
        score: "19",
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
        name: "Abbas",
        lastName: "Elahi",
        score: "19",
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        score: "19",
    },
];

const UsersDatas = [
    {
        name: "Abbas",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 3,
            purchaseSum : "23000000",
        },
    },
    {
        name: "Arian",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 5,
            purchaseSum : "50000000",
        },
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        purchase: {
            purchaseCount: 1,
            purchaseSum : "13000000",
        },
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        purchase: {
            purchaseCount: 6,
            purchaseSum : "21000000",
        },
    },
    {
        name: "Reza",
        lastName: "Hosseini",
        purchase: {
            purchaseCount: 0,
            purchaseSum : "0",
        },
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        purchase: {
            purchaseCount: 8,
            purchaseSum : "53000000",
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
        name: "Abbas",
        lastName: "Elahi",
        purchase: [3,"23000000"]
    },
    {
        name: "Arian",
        lastName: "Elahi",
        purchase:  [5, "50000000"]
    },
    {
        name: "Hossein",
        lastName: "Elahi",
        purchase:  [1,"13000000"]
    },
    {
        name: "Ali",
        lastName: "mohammadi",
        purchase:  [6,"21000000"]
    },
    {
        name: "Reza",
        lastName: "Hosseini",
        purchase:  [0,"0"]
    },
    {
        name: "Jafar",
        lastName: "Karimi",
        purchase:  [8,"53000000"]
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
    ["Abbas", "Elahi", ["20"]],
    ["arian", "Elahi", ["18"]],
    ["Hossein", "Elahi", ["19"]],
    ["Ali", "mohammadi", ["15.5"]],
    ["Reza", "Hosseini", ["11"]],
    ["Jafar", "Karimi", ["14"]],
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
    UsersDatas,
    SortedUsersDatas,
    UsersDatasArrayMode,
    SortedUsersDatasArrayMode,
    nestedArray,
    SortedNestedArray,
};