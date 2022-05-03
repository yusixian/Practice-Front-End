function wait(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t);
    });
}
wait(1000).then(() => { console.log('get called'); });