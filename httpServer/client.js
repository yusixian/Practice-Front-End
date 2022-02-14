const http = require('http');
const body = JSON.stringify({ msg: 'hello from my own client' });
// [url] [option] [callback]
const req = http.request('http://127.0.0.1:3000', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': body.length,
    },
}, (res) => {   // 响应体   
    const bufs = [];
    res.on('data', data => {
        bufs.push(data);
    });
    res.on('end', () => {
        const buf = Buffer.concat(bufs);
        const receive = JSON.parse(buf);
        console.log('receive json.msg is:', receive);
    });
})
req.end(body);