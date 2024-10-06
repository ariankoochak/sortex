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

test("manualSort => quick3Sort test :: StudentList", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            sortAlgorithm: "quick3",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => quick3Sort test :: UserDatas", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            sortAlgorithm: "quick3",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => quick3Sort test :: UsersDatasArrayMode", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            sortAlgorithm: "quick3",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("manualSort => quick3Sort test :: nestedArray", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            sortAlgorithm: "quick3",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});
