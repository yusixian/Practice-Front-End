function debounce(fn, dur) {
    dur = dur || 100;   // dur若不存在则设置dur为100ms
    var timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, dur);
    }
}