const { getSmallest } = require("../..");
const {
    StudentList,
    UsersDatas,
    nestedArray,
    UsersDatasArrayMode,
} = require("../arraysForTest/randomArray");

test("getSmallest-1", () => {
    const test = () => {
        return getSmallest(StudentList, {
            valuePath: "score",
        });
    };
    expect(test()).toEqual({ lastName: "Hosseini", name: "Reza", score: "11" });
});

test("getSmallest-2", () => {
    const test = () => {
        return getSmallest(UsersDatas, {
            valuePath: "purchase.purchaseCount",
        });
    };
    expect(test()).toEqual( {"lastName": "Hosseini", "name": "Reza", "purchase": {"purchaseCount": 0, "purchaseSum": "0"}});
});

test("getSmallest-3", () => {
    const test = () => {
        return getSmallest(UsersDatasArrayMode, {
            valuePath: "purchase.0",
        });
    };
    expect(test()).toEqual({"lastName": "Hosseini", "name": "Reza", "purchase": [0, "0"]});
});

test("getSmallest-4", () => {
    const test = () => {
        return getSmallest(nestedArray, {
            valuePath: "2.0",
        });
    };
    expect(test()).toEqual(["Reza", "Hosseini", ["11"]]);
});
