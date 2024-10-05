function findKey(obj, target){
    return target in obj
        ? obj[target]
        : Object.values(obj).reduce((acc, val) => {
              if (acc !== undefined) return acc;
              if (typeof val === "object") return findKey(val, target);
          }, undefined);
};

module.exports = findKey