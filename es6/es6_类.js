// 单例类: 
// 只能创建一个对象的类: 单例类

// 当 对象.sb 是在 = 左侧的时候, 走的是 sb属性的 set 方法
// 其他任何地方 都是 sb属性的 get方法
class Person {
    constructor(name) {
        this.name = name
        this._age = 12
    }
    get age() {
        console.log("get.....")
        return this._age
    }
    set age(aaa) {
        if (aaa < 0) {
            console.log("不能设置年龄太小...") 
        } else {
            console.log("set....")
            this._age = aaa
        }
        
    }
}

let p1 = new Person("张三")
p1.age = p1.age -13
console.log(p1.age)






// 直接等价于 PersonClass
// let Person = (function() {
//     "use strict";
//     const Person = function(name) {
//         if (typeof new.target === "undefined") {
//             throw new Error("Constructor must be called with new.");
//         }
//         this.name = name;
//     }
//     Object.defineProperty(Person.prototype, "run", {
//         value: function() {
//             // 确认函数被调用时没有使用 new
//             if (typeof new.target !== "undefined") {
//                 throw new Error("Method cannot be called with new.");
//             }
//             console.log(this.name , ": running...");
//         }
//     });
//     return Person;
// }());



