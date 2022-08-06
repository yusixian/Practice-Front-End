function once(fn) {
    return function(...args) {
        if(fn) {
            const ret = fn.apply(this, args);
            fn = null;
            return ret;
        }
    }
}
const list = document.querySelector('ul');
const buttons = list.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click', once((evt) => {
        const target = evt.target;
        target.parentNode.className = 'completed';
        setTimeout(()=>{
            list.removeChild(target.parentNode);
        },2000);
    }))
});
