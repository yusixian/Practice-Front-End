const getTimeString = () => {
    return new Date().toLocaleString( 'zh-cn', { hour12: false }).replace(/[\/]/g,'-');
}
let now = new Date();
console.log(now.toLocaleString( 'zh-cn', { hour12: false }).slice(-8));
console.log(now.getFullYear(), now.getMonth(), now.getDate());
function format(date) {
    let y = date.getFullYear();
    let m = `${date.getMonth()+1}`.padStart(2, "0");
    let d = `${date.getDate()}`.padStart(2, "0");
    return `${y}-${m}-${d} ${date.toLocaleString( 'zh-cn', { hour12: false }).slice(-8)} `
}
console.log(format(now));