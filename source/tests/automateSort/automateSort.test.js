const analyzeArrayCondition = require("../../lib/analyzeArrayCondition");
const {
    StudentList,
    UsersDatas,
    nestedArray,
    UsersDatasArrayMode,
} = require("../arraysForTests");

test("automateSort", () => {
    const test = () => {
        return analyzeArrayCondition(StudentList);
    };
    expect(test()).toEqual('random');
});

test("automateSort", () => {
    const test = () => {
        return analyzeArrayCondition(UsersDatas);
    };
    expect(test()).toEqual("random");
});

test("automateSort", () => {
    const test = () => {
        return analyzeArrayCondition(nestedArray);
    };
    expect(test()).toEqual("random");
});

test("automateSort", () => {
    const test = () => {
        return analyzeArrayCondition(UsersDatasArrayMode);
    };
    expect(test()).toEqual("random");
});
