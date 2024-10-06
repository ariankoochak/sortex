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

test("manualSort => shellSort test :: StudentList", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            sortAlgorithm: "shell",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => shellSort test :: UserDatas", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            sortAlgorithm: "shell",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => shellSort test :: UsersDatasArrayMode", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            sortAlgorithm: "shell",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("manualSort => shellSort test :: nestedArray", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            sortAlgorithm: "shell",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});
