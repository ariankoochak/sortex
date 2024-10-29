const { getBiggest } = require("../..");
const {
    StudentList,
    UsersDatas,
    nestedArray,
    UsersDatasArrayMode,
} = require("../arraysForTest/randomArray");

test("getBiggest-1", () => {
    const test = () => {
        return getBiggest(StudentList, {
            valuePath: "score",
        });
    };
    expect(test()).toEqual({ lastName: "Elahi", name: "Abbas", score: "20" });
});

test("getBiggest-2", () => {
    const test = () => {
        return getBiggest(UsersDatas, {
            valuePath: "purchase.purchaseCount",
        });
    };
    expect(test()).toEqual({"lastName": "Karimi", "name": "Jafar", "purchase": {"purchaseCount": 8, "purchaseSum": "53000000"}});
});

test("getBiggest-3", () => {
    const test = () => {
        return getBiggest(UsersDatasArrayMode, {
            valuePath: "purchase.0",
        });
    };
    expect(test()).toEqual({"lastName": "Karimi", "name": "Jafar", "purchase": [8, "53000000"]});
});

test("getBiggest-4", () => {
    const test = () => {
        return getBiggest(nestedArray, {
            valuePath: "2.0",
        });
    };
    expect(test()).toEqual(["Abbas", "Elahi", ["20"]]);
});
