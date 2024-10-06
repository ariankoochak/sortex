const analyzeArrayCondition = require("../../lib/analyzeArrayCondition");
const {
    StudentList,
    UsersDatas,
    nestedArray,
    UsersDatasArrayMode,
} = require("../arraysForTest/randomArray");

const nearlySortedArr = require("../arraysForTest/nearlySortedArray");

test("analyzeArrayCondition => random", () => {
    const test = () => {
        return analyzeArrayCondition(StudentList);
    };
    expect(test()).toEqual('random');
});

test("analyzeArrayCondition => random", () => {
    const test = () => {
        return analyzeArrayCondition(UsersDatas);
    };
    expect(test()).toEqual("random");
});

test("analyzeArrayCondition => random", () => {
    const test = () => {
        return analyzeArrayCondition(nestedArray);
    };
    expect(test()).toEqual("random");
});

test("analyzeArrayCondition => random", () => {
    const test = () => {
        return analyzeArrayCondition(UsersDatasArrayMode);
    };
    expect(test()).toEqual("random");
});

test("analyzeArrayCondition => nearly sorted", () => {
    const test = () => {
        return analyzeArrayCondition(nearlySortedArr.SortedStudentList);
    };
    expect(test()).toEqual("nearly-sorted");
});

test("analyzeArrayCondition => nearly sorted", () => {
    const test = () => {
        return analyzeArrayCondition(nearlySortedArr.UsersDatas);
    };
    expect(test()).toEqual("nearly-sorted");
});

test("analyzeArrayCondition => nearly sorted", () => {
    const test = () => {
        return analyzeArrayCondition(nearlySortedArr.UsersDatasArrayMode);
    };
    expect(test()).toEqual("nearly-sorted");
});

test("analyzeArrayCondition => nearly sorted", () => {
    const test = () => {
        return analyzeArrayCondition(nearlySortedArr.nestedArray);
    };
    expect(test()).toEqual("nearly-sorted");
});
