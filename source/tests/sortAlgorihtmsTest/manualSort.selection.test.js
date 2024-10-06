const { manualSort } = require("../..");
const {
    StudentList,
    SortedStudentList,
    UsersDatas,
    SortedUsersDatas,
    nestedArray,
    SortedNestedArray,
    UsersDatasArrayMode,
    SortedUsersDatasArrayMode,
} = require("../arraysForTest/randomArray");

test("manualSort => selectionSort test :: StudentList", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            sortAlgorithm: "selection",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => selectionSort test :: UserDatas", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            sortAlgorithm: "selection",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => selectionSort test :: UsersDatasArrayMode", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            sortAlgorithm: "selection",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("manualSort => selectionSort test :: nestedArray", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            sortAlgorithm: "selection",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});
