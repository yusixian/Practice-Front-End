// 将每次准备调用的函数放入tasks列表中，若定时器为空则设置一个定时器
// 执行内容 `定时执行tasks出队，若全部tasks已经清空（当前没有任务了）则将定时器清除` 
// ，若定时器不为空则不做操作（但放到tasks列表中了）。
function consumer(fn, time) {
    let tasks = [],
        timer;
    return function (...args) {
        tasks.push(fn.bind(this, ...args));
        if(timer == null) {
            timer = setInterval(() => {
                tasks.shift().call(this);
                if(tasks.length <= 0) {
                    clearInterval(timer);
                    timer = null;
                }
            }, time);
        }
    }
}
btn.onclick = consumer((evt) => {
    /*
     * 事件处理 如每次调用了很多次某事件，将这些事件丢到
     * 一个列表中，按设定好的时间隔一段时间并执行返回其结果。 
     */
    let t = parseInt(count.innerHTML.slice(1)) + 1;
    count.className = 'hit';
    let r = t * 7 % 256,
        g = t * 17  % 128,
        b = t * 31  % 128;
    count.style.color = `rgb(${r}, ${g}, ${b})`.trim();
    setTimeout(() => {
        count.className = 'hide';
    }, 500);
}, 800);
