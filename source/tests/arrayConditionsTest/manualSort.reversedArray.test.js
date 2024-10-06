const { manualSort } = require("../..");
const { StudentList, SortedStudentList, UsersDatas, SortedUsersDatas, nestedArray, SortedNestedArray, UsersDatasArrayMode, SortedUsersDatasArrayMode } = require("../arraysForTests");

test("manualSort => StudentList test with arrayCondition : reversed", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            arrayCondition: "reversed",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => UsersDatas test with arrayCondition : reversed", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            arrayCondition: "reversed",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => nestedArray test with arrayCondition : reversed", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            arrayCondition: "reversed",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});

test("manualSort => UsersDatasArrayMode test with arrayCondition : reversed", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            arrayCondition: "reversed",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

