const React = require('react');
const ReactDOMServer = require('react-dom/server');
const http = require('http');
function App(props) {
    return React.createElement('div', {}, props.children || 'Hello');
}
const server = http.createServer((req, res) => {
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Application</title>
            </head>
            <body>
                ${ReactDOMServer.renderToString(
                    React.createElement(App, {}, 'my_content'))}
                <script>
                    // 初始化应用
                </script>
            </body>
        </html>
    `);
})
const port = 3000;
server.listen(port, () => {
    console.log('listening on: ', port);
})