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

test("manualSort => quickSort test :: StudentList", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            sortAlgorithm: "quick",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => quickSort test :: UserDatas", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            sortAlgorithm: "quick",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => quickSort test :: UsersDatasArrayMode", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            sortAlgorithm: "quick",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("manualSort => quickSort test :: nestedArray", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            sortAlgorithm: "quick",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});
