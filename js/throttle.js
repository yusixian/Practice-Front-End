function throttle(fn, time = 500) {
    let timer;
    return function(...args) {
        if(timer == null) {
            fn.apply(this, args);
            timer = setTimeout(() => {
                timer = null;
            }, timer);
        }
    }
}
btn.onclick = throttle(function(e){
    /* 事件处理 */
    circle.innerHTML = parseInt(circle.innerHTML)+1;
    circle.className = 'fade';
    setTimeout(() => circle.className = '', 250);
});