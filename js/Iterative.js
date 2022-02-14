const isIterable = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
function iterative(fn) {
    return function(subject, ...rest) {
        if(isIterable(subject)) {
            const ret = [];
            for(let obj of subject) {
                ret.push(fn.apply(this, [obj, ...rest]));
            }
            return ret;
        }
        return fn.apply(this, [subject, ...rest]);
    }
}
const setColor = iterative((el, color) => {
    el.style.color = color;
})
const els = document.querySelectorAll('li:nth-child)');
setColor(els, 'red');