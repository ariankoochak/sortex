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
} = require("../arraysForTests");

test("manualSort => insertionSort test with arrayCondition", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            sortAlgorithm: "insertion",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => insertionSort test with arrayCondition", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            sortAlgorithm: "insertion",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => insertionSort test with arrayCondition", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            sortAlgorithm: "insertion",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("manualSort => insertionSort test with arrayCondition", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            sortAlgorithm: "insertion",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});
