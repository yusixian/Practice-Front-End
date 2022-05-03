const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
function create3DContext(canvas, options) {
    const names = ['webgl', 'experimental-webgL','webkit-3d','moz-webgl'];  // 特性判断
    if(options.webgl2) names.unshift(webgl2);
    let context = null;
    for(let ii = 0; ii < names.length; ++ii) {
        try {
            context = canvas.getContext(names[ii], options);
        } catch(e) {
            // no-empty
        }
        if(context) {
            break;
        }
    }
    return context;
}
// 顶点着色器程序代码
const vertex = `
attribute vec2 position;
void main() {
    gl_PointSize = 1.0;
    gl_Position = vec4(position, 1.0, 1.0);
}
`;
// 片元着色器程序代码
const fragment = `
precision mediump float;
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;

// 顶点着色器
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertex);
gl.compileShader(vertexShader);
// 片元着色器
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragment);
gl.compileShader(fragmentShader);

// 创建着色器程序并链接
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

gl.useProgram(program);

// 顶点数据
const points = new Float32Array([
    -1, -1,
    0, 1,
    1, -1,
]);
// 创建缓冲区
const bufferId = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

const vPosition = gl.getAttribLocation(program, 'position'); // 获取顶点着色器中的position变量的地址
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0); // 给变量设置长度和类型
gl.enableVertexAttribArray(vPosition); // 激活这个变量

// output
gl.clear(gl.COLOR_BUFFER_BIT);  //清除缓冲的数据
gl.drawArrays(gl.TRIANGLES, 0, points.length / 2);

// canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(250, 0);
ctx.lineTo(500, 500);
ctx.lineTo(0, 500);
ctx.fillStyle = 'red';
ctx.fill();

const vertices = [
    [-0.7, 0.5],
    [-0.4, 0.3],
    [-0.25, 0.71],
    [-0.1, 0.56],
    [-0.1, 0.13],
    [0.4, 0.21],
    [0, -0.6],
    [-0.3, -0.3],
    [-0.6, -0.3],
    [-0.45, 0.0],
];
const points = vertices.flat();
const triangles = earcut(points)