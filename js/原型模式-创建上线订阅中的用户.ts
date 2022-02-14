// 原型模式，当然要有原型啦
const baseUser:User = { 
    name: "",
    status: "offline",
    followers: [],
    subscribe(user, notify) {
        user.followers.push({user, notify});
    },
    online() { // 该用户上线 调用其订阅函数
        this.status = "online";
        this.followers.forEach( ({notify}) => {
            notify(this);
        });
    }
}
// 然后导出在该原型之上创建对象的函数
export const createUser = (name:string) => {
    const user:User = Object.create(baseUser);
    user.name = name;
    user.followers = [];
    return user;
};

test("should notify followers when user is online for user prototypes", () => {
    const user1 = createUser("user1");
    const user2 = createUser("user2");
    const user3 = createUser("user3");
    const mockNotifyUser1 = jest.fn();   // 通知user1的函数
    const mockNotifyUser2 = jest.fn();   // 通知user2的函数
    user1.subscribe(user3, mockNotifyUser1); // 1订阅了3
    user2.subscribe(user3, mockNotifyUser2); // 2订阅了3
    user3.online();  // 3上线，调用mockNotifyUser1和mockNotifyUser2
    expect(mockNotifyUser1).toBeCalledWith(user3);
    expect(mockNotifyUser2).toBeCalledWith(user3);
});
