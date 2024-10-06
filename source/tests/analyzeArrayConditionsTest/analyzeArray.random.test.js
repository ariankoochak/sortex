const analyzeArrayCondition = require("../../lib/analyzeArrayCondition");
const optimizeArray = require("../../lib/optimizeArray");

const {
    StudentList,
    UsersDatas,
    nestedArray,
    UsersDatasArrayMode,
} = require("../arraysForTest/randomArray");

test("analyzeArrayCondition => random", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(StudentList,'score'));
    };
    expect(test()).toEqual('random');
});

test("analyzeArrayCondition => random", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(UsersDatas,'purchase.purchaseCount'));
    };
    expect(test()).toEqual("random");
});

test("analyzeArrayCondition => random", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(UsersDatasArrayMode, 'purchase.0'));
    };
    expect(test()).toEqual("random");
});

test("analyzeArrayCondition => random", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(nestedArray, '2.0'));
    };
    expect(test()).toEqual("random");
});