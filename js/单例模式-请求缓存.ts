import {api} from './utils';
export class Request {
    static instance: Request;
    private cache: Record<string, string>;
    constructor() {
        this.cache = {};
    }
    static getinstance() {
        if(this.instance) {
            return this.instance;
        }
        this.instance = new Request();  // 之前还未有过请求，初始化该单例
        return this.instance;
    }
    public async request(url:string) {
        if(this.cache[url]) {
            return this.cache[url];
        }
        const response = await api(url);
        this.cache[url] = response;

        return response;
    }
}
test('should response more than 500ms with class', async() => {
    const request = Request.getinstance();  //获取/创建一个单例对象（若之前未创建过则创建）
    const startTime = Date.now();
    await request.request('/user/1');
    const endTime = Date.now();

    const costTime = endTime-startTime;
    expect(costTime).toBeGreaterThanOrEqual(500);
});

test('should response quickly second time with class', async() => {
    const request1 = Request.getinstance();
    await request1.request('/user/1');

    const startTime = Date.now();   // 测试这一部分的时间
    const request2 = Request.getinstance();
    await request2.request('/user/1');
    const endTime = Date.now();

    const costTime = endTime-startTime;
    expect(costTime).toBeLessThan(50);
});

// 不用class？可以更简洁
import {api} from './utils';
const cache: Record<string,string> = {};
export const request = async (url:string) => {
    if(cache[url]) {    // 与class中一致
        return cache[url];
    }
    const response = await api(url);

    cache[url] = response;
    return response;
};
test('should response quickly second time', async() => {
    await request('/user/1');
    const startTime = Date.now();   // 测试这一部分的时间
    await request('/user/1');
    const endTime = Date.now();

    const costTime = endTime-startTime;
    expect(costTime).toBeLessThan(50);
});
