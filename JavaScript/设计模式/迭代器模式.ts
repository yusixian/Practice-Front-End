class MyDomElement {
    tag: string;
    children: MyDomElement[];
    constructor(tag:string) {
        this.tag = tag;
        this.children = [];
    }
    addChildren(component: MyDomElement) {
        this.children.push(component);
    }
    [Symbol.iterator]() {
        const list = [...this.children];
        let node;
        return {
            next: () => {
                while((node = list.shift())) {
                    node.children.length > 0 && list.push(...node.children);
                    return { value: node, done: false };
                }
                return { value:null, done:true };
            },
        };
    }
}
test("can iterate root element", () => {
    const body = new MyDomElement("body");
    const header = new MyDomElement("header");
    const main = new MyDomElement("main");
    const banner = new MyDomElement("banner");
    const content = new MyDomElement("content");
    const footer = new MyDomElement("footer");
    body.addChildren(header);
    body.addChildren(main);
    body.addChildren(footer);
    main.addChildren(banner);
    main.addChildren(content);
    const expectTags: string[] = [];
    for(const element of body) {
        if(element) {
            expectTags.push(element.tag);
        }
    }
    expect(expectTags.length).toBe(5);
});