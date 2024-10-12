function findValue(obj, keyPath) {
    if(keyPath === '0'){
        return 0;
    }
    keyPath = keyPath.split(".");
    let resTemplate = "obj";
    for (const key of keyPath) {
        resTemplate += `['${key}']`;
    }
    return eval(resTemplate);
}

module.exports = findValue;