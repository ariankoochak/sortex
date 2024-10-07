const { automateSort } = require("../..");
const {
    StudentList,
    UsersDatas,
} = require("../arraysForTest/nearlySortedArray");

test("automateSort", () => {
    const test = () => {
        const res = automateSort([1,4,5,2], {
            valuePath: "score",
        });
        return res[0] === 'value for compare was not found in one of index in array' ? true : false
    };
    expect(test()).toBe(true);
});

test("automateSort", () => {
    const test = () => {
        const res = automateSort(StudentList, {
            valuePath: "emtiaz",
        });
        return res[0] === 'value for compare was not found in one of index in array' ? true : false
    };
    expect(test()).toBe(true);
});

test("automateSort", () => {
    const test = () => {
        const res = automateSort(StudentList);
        return res[0] === "value for compare was not found in one of index in array" ? true : false;
    };
    expect(test()).toBe(true);
});

test("automateSort", () => {
    const test = () => {
        const res = automateSort(UsersDatas,{valuePath : 'score'});
        return res[0] === "value for compare was not found in one of index in array" ? true : false;
    };
    expect(test()).toBe(true);
});

