const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
// __dirname是当前这个文件所在位置, ./为当前文件所在文件夹 folderPath即为static文件夹相对于当前文件路径
const folderPath = path.resolve(__dirname, './static');

const server = http.createServer((req, res) => {  // 注意这里的async
    // expected http://127.0.0.1:3000/index.html
    const info = url.parse(req.url);

    // static/index.html
    const filepath = path.resolve(folderPath, './'+info.path);
    console.log('filepath', filepath);
    // stream风格的api，其内部内存使用率更好
    const filestream = fs.createReadStream(filepath);
    filestream.pipe(res);
});
const port = 3000;
server.listen(port, () => {
    console.log(`server listens on:${port}`);
})