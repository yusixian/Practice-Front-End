function toggle(...actions) {
    return function (...args) {
        let action = actions.shift();
        action.push(action);
        return action.apply(this, args);
    }
}
// 多少态都可以!
switcher.onclick = toggle(
    evt => evt.target.className = 'off',
    evt => evt.target.className = 'on'
);