const { automateSort } = require("../..");
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

test("automateSort", () => {
    const test = () => {
        return automateSort(StudentList, {
            valuePath: "score",
        });
    };
    expect(test()).toEqual(SortedStudentList);
});

test("automateSort", () => {
    const test = () => {
        return automateSort(UsersDatas, {
            valuePath: "purchase.purchaseCount",
        });
    };
    expect(test()).toEqual(SortedUsersDatas);
});

test("automateSort", () => {
    const test = () => {
        return automateSort(UsersDatasArrayMode, {
            valuePath: "purchase.0",
        });
    };
    expect(test()).toEqual(SortedUsersDatasArrayMode);
});

test("automateSort", () => {
    const test = () => {
        return automateSort(nestedArray, {
            valuePath: "2.0",
        });
    };
    expect(test()).toEqual(SortedNestedArray);
});

//FIXME: fix code for this array
test("automateSort", () => {
    const test = () => {
        return automateSort([2,7,3,1,96,33,24,13], {
            valuePath: "0",
        });
    };
    expect(test()).toEqual([1, 2, 3, 7, 13, 24, 33, 96]);
});
