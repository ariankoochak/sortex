function findValue(obj, keyPath) {
    keyPath = keyPath.split(".");
    let resTemplate = "obj";
    for (const key of keyPath) {
        resTemplate += `['${key}']`;
    }
    return eval(resTemplate);
}

module.exports = findValue;