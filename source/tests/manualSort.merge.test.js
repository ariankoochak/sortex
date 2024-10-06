const { manualSort } = require("..");
const {
    StudentList,
    SortedStudentList,
    UsersDatas,
    SortedUsersDatas,
    nestedArray,
    SortedNestedArray,
    UsersDatasArrayMode,
    SortedUsersDatasArrayMode,
} = require("./arraysForTests");

test("manualSort => mergeSort test :: StudentList", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            sortAlgorithm: "merge",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => mergeSort test :: UserDatas", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            sortAlgorithm: "merge",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => mergeSort test :: UsersDatasArrayMode", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            sortAlgorithm: "merge",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("manualSort => mergeSort test :: nestedArray", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            sortAlgorithm: "merge",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});
