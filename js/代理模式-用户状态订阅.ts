type Notify = (user: User) => void;
export class User {
    name: string;
    status: "offline" | "online";// 状态 离线/在线
    followers: { user:User; notify: Notify }[]; // 订阅他人的数组，包括用户及其上线时的通知函数
    constructor(name: string) {
        this.name = name;
        this.status = "offline";
        this.followers = [];
    }
    subscribe(user:User, notify: Notify) {
        user.followers.push({user, notify});
    }
    online() { // 该用户上线 调用其订阅函数
        this.status = "online";
        // this.followers.forEach( ({notify}) => {
        //     notify(this);
        // });
    }
}
// 创建代理，监听其上线状态的变化
export const createProxyUser = (name:string) => {
    const user = new User(name); //正常的user
    // 代理的对象
    const proxyUser = new Proxy(user, { 
        set: (target, prop: keyof User, value) => {
            target[prop] = value;
            if(prop === 'status') {
                notifyStatusHandlers(target, value);
            }
            return true;
        }
    })
    const notifyStatusHandlers = (user: User, status: "online" | "offline") => {
        if(status === "online") {
            user.followers.forEach(({notify}) => {
                notify(user);
            });
        }
    };
    return proxyUser;
}