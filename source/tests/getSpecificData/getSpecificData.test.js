const { getSpecificData } = require("../..");
const {
    StudentList,
    UsersDatas,
    nestedArray,
    UsersDatasArrayMode,
} = require("../arraysForTest/randomArray");

test("getSpecificData", () => {
    const test = () => {
        return getSpecificData(StudentList, {
            valuePath: "score",
        });
    };
    expect(test()).toEqual(["20", "18", "19", "15.5", "11", "14"]);
});

test("getSpecificData", () => {
    const test = () => {
        return getSpecificData(UsersDatas, {
            valuePath: "purchase.purchaseCount",
        });
    };
    expect(test()).toEqual([3, 5, 1, 6, 0, 8]);
});

test("getSpecificData", () => {
    const test = () => {
        return getSpecificData(UsersDatasArrayMode, {
            valuePath: "purchase.0",
        });
    };
    expect(test()).toEqual([3,5,1,6,0,8]);
});

test("getSpecificData => bubbleSort test with arrayCondition", () => {
    const test = () => {
        return getSpecificData(nestedArray, {
            valuePath: "2.0",
        });
    };
    expect(test()).toEqual(["20","18","19","15.5","11","14"]);
});
