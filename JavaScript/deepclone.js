/*
 * @Author: cos
 * @Date: 2022-03-23 10:45:26
 * @LastEditTime: 2022-03-23 11:17:59
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \code\deepclone.js
 */
let obj1 = {
    field1: 1,
    field2: undefined,
    field3: {child: 'c'},
    field4: [1, 2, 3, 4]
};
function forEach(arr, iter) {
    let i = 0;
    const len = arr.length;
    while(i < len) {
        iter(arr[i], i);
        ++i;
    }
}
function deepclone(target, map = new WeakMap()) {
    let type = typeof target;
    if(type != 'object' || target === null || type === 'function') return target;
    let t = map.get(target);
    if(t) return t;
    let isArray =  Array.isArray(target);
    let cloned = isArray ? [] : {};
    map.set(target, cloned);
    let keys = isArray? undefined: Object.keys(target);
    forEach(keys || target, (val, key) => {
        if(keys) key = val;
        cloned[key] = deepclone(target[key], map);
    });
    return cloned;
}
obj1.row = obj1;
console.log(obj1);
let obj2 = deepclone(obj1);
console.log(obj2);