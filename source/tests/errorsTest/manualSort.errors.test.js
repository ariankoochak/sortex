const { manualSort } = require("../..");
const {
    StudentList,
    UsersDatas,
} = require("../arraysForTest/nearlySortedArray");

test("manualSort", () => {
    const test = () => {
        const res = manualSort([1,4,5,2], {
            valuePath: "score",
        });
        return res[0] === 'value for compare was not found in one of index in array' ? true : false
    };
    expect(test()).toBe(true);
});

test("manualSort", () => {
    const test = () => {
        const res = manualSort(StudentList, {
            valuePath: "emtiaz",
        });
        return res[0] === 'value for compare was not found in one of index in array' ? true : false
    };
    expect(test()).toBe(true);
});

test("manualSort", () => {
    const test = () => {
        const res = manualSort(StudentList);
        return res[0] === "arrayCondition is wrong" ? true : false;
    };
    expect(test()).toBe(true);
});

test("manualSort", () => {
    const test = () => {
        const res = manualSort(UsersDatas,{valuePath : 'score'});
        return res[0] === "value for compare was not found in one of index in array" ? true : false;
    };
    expect(test()).toBe(true);
});

