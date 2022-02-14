const http = require('http');
const port = 3000;
const server = http.createServer(async (req, res) => {  // 注意这里的async
    // receive body from client 
    const msg = await new Promise((resolve, reject) => {    //执行完再交给msg
        const bufs = [];    // 取传的数据
        req.on('data', data => {
            bufs.push(data);
        });
        req.on('error', (err) => {
            reject(err);
        })
        req.on('end', () => {
            const buf = Buffer.concat(bufs).toString('utf-8');
            let msg = 'Hello';
            try {
                reqData = JSON.parse(buf);
                msg = reqData.msg;
            } catch (err) {
                // 
            }
            resolve(msg);
        });
    });
    // response
    const responseJson = {
        msg: `receive：${msg}`
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(responseJson));
});
server.listen(port, () => {
    console.log(`server listens on:${port}`);
})