const analyzeArrayCondition = require("../../lib/analyzeArrayCondition");
const optimizeArray = require("../../lib/optimizeArray");

const randomFewUnique = require("../arraysForTest/randomFewUniqueArray");

test("analyzeArrayCondition => randomFewUnique", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(randomFewUnique.StudentList,'score'));
    };
    expect(test()).toEqual('random-few-unique');
});

test("analyzeArrayCondition => random-fewUnique", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(randomFewUnique.UsersDatas,'purchase.purchaseCount'));
    };
    expect(test()).toEqual("random-few-unique");
});

test("analyzeArrayCondition => randomFewUnique", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(randomFewUnique.UsersDatasArrayMode, 'purchase.0'));
    };
    expect(test()).toEqual("random-few-unique");
});

test("analyzeArrayCondition => randomFewUnique", () => {
    const test = () => {
        return analyzeArrayCondition(optimizeArray(randomFewUnique.nestedArray, '2.0'));
    };
    expect(test()).toEqual("random-few-unique");
});