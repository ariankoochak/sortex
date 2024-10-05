const { manualSort } = require("..");
const { StudentList, SortedStudentList, UsersDatas, SortedUsersDatas, nestedArray, SortedNestedArray, UsersDatasArrayMode, SortedUsersDatasArrayMode } = require("./arraysForTests");

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
            valuePath: "purchaseCount",
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

test("manualSort => bubbleSort test with arrayCondition", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            sortAlgorithm: "bubble",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => bubbleSort test with arrayCondition", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            sortAlgorithm: "bubble",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => bubbleSort test with arrayCondition", () => {
    const test = () => {
        return manualSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
            sortAlgorithm: "bubble",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("manualSort => bubbleSort test with arrayCondition", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath: "2.0",
            sortAlgorithm: "bubble",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});

