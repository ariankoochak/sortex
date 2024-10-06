const analyzeArrayCondition = require("../../lib/analyzeArrayCondition");
const optimizeArray = require("../../lib/optimizeArray");

const reversedArray = require("../arraysForTest/reversedArray");

test("analyzeArrayCondition => reversed", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(reversedArray.StudentList,'score'));
    };
    expect(test()).toEqual('reversed');
});

test("analyzeArrayCondition => reversed", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(reversedArray.UsersDatas,'purchase.purchaseCount'));
    };
    expect(test()).toEqual("reversed");
});

test("analyzeArrayCondition => reversed", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(reversedArray.UsersDatasArrayMode, 'purchase.0'));
    };
    expect(test()).toEqual("reversed");
});

test("analyzeArrayCondition => reversed", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(reversedArray.nestedArray, '2.0'));
    };
    expect(test()).toEqual("reversed");
});