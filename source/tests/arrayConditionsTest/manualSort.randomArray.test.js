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

test("manualSort => StudentList test with arrayCondition", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            arrayCondition: "random",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => UsersDatas test with arrayCondition", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            arrayCondition: "random",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => nestedArray test with arrayCondition", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            arrayCondition: "random",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});

test("manualSort => UsersDatasArrayMode test with arrayCondition", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            arrayCondition: "random",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});


test("manualSort", () => {
    const test = () => {
        return manualSort([2, 7, 3, 1, 96, 33, 24, 13], {
            valuePath: "0",
            arrayCondition : "random",
        });
    };
    expect(test()).toEqual([1, 2, 3, 7, 13, 24, 33, 96]);
});
