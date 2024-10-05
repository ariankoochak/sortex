const { manualSort } = require("..");
const { StudentList, SortedStudentList, UsersDatas, SortedUsersDatas, nestedArray, SortedNestedArray, UsersDatasArrayMode, SortedUsersDatasArrayMode } = require("./arraysForTests");

test("manualSort => StudentList test", () => {
    const test = () => {
        return manualSort(StudentList,{keyOfObject : 'score',arrayCondition : 'random'})
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => UsersDatas test", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchaseCount",
            arrayCondition: "random",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("manualSort => nestedArray test", () => {
    const test = () => {
        return manualSort(nestedArray, {
            valuePath : '2.0',
            arrayCondition: "random",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});

test("manualSort => bubbleSort test", () => {
    const test = () => {
        return manualSort(StudentList, {
            valuePath: "score",
            sortAlgorithm: "bubble",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("manualSort => bubbleSort test", () => {
    const test = () => {
        return manualSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
            sortAlgorithm: "bubble",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

