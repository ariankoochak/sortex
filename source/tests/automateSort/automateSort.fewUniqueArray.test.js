const { automateSort } = require("../..");
const {
    StudentList,
    SortedStudentList,
    UsersDatas,
    SortedUsersDatas,
    nestedArray,
    SortedNestedArray,
    UsersDatasArrayMode,
    SortedUsersDatasArrayMode,
} = require("../arraysForTest/randomFewUniqueArray");

test("automateSort :: randomFewUniqueArray", () => {
    const test = () => {
        return automateSort(StudentList, {
            valuePath: "score",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("automateSort :: randomFewUniqueArray", () => {
    const test = () => {
        return automateSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("automateSort :: randomFewUniqueArray", () => {
    const test = () => {
        return automateSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("automateSort :: randomFewUniqueArray", () => {
    const test = () => {
        return automateSort(nestedArray, {
            valuePath: "2.0",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});
