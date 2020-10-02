class User {
    constructor(name, age) {
        this.gender = "男";
        this.publishNumber = 3;
        this.curNumber = 0;
        this.id = Math.random();
        this.name = name;
        this.age = age;
    }
    publish(title) {
        if (this.curNumber < this.publishNumber) {
            console.log("发布一片文章：" + title);
            this.curNumber++;
        }
        else {
            console.log("you can publish blog has been number,today!");
        }
    }
}
const u = new User("aa", 12);
u.publish("文章1");
u.publish("文章2");
u.publish("文章3");
u.publish("文章4");
u.publish("文章5");
u.publish("文章6");
