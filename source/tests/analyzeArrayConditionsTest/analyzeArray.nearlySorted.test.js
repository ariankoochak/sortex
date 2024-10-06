const analyzeArrayCondition = require("../../lib/analyzeArrayCondition");
const optimizeArray = require("../../lib/optimizeArray");

const nearlySortedArr = require("../arraysForTest/nearlySortedArray");

test("analyzeArrayCondition => nearly sorted", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(nearlySortedArr.SortedStudentList,'score'));
    };
    expect(test()).toEqual("nearly-sorted");
});

test("analyzeArrayCondition => nearly sorted", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(nearlySortedArr.UsersDatas,'purchase.purchaseCount'));
    };
    expect(test()).toEqual("nearly-sorted");
});

test("analyzeArrayCondition => nearly sorted", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(nearlySortedArr.UsersDatasArrayMode,'purchase.0'));
    };
    expect(test()).toEqual("nearly-sorted");
});

test("analyzeArrayCondition => nearly sorted", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(nearlySortedArr.nestedArray,'2.0'));
    };
    expect(test()).toEqual("nearly-sorted");
});
