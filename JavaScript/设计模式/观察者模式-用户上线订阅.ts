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
        this.followers.forEach( ({notify}) => {
            notify(this);
        });
    }
}
test("should notify followers when user is online for multiple users", () => {
   const user1 = new User("user1");
   const user2 = new User("user2"); 
   const user3 = new User("user3"); 
   const mockNotifyUser1 = jest.fn();   // 通知user1的函数
   const mockNotifyUser2 = jest.fn();   // 通知user2的函数
   user1.subscribe(user3, mockNotifyUser1); // 1订阅了3
   user2.subscribe(user3, mockNotifyUser2); // 2订阅了3
   user3.online();  // 3上线，调用mockNotifyUser1和mockNotifyUser2
   expect(mockNotifyUser1).toBeCalledWith(user3);
   expect(mockNotifyUser2).toBeCalledWith(user3);
});