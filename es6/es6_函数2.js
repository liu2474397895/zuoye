// instance: 实例
// 判断一个函数, 是否在创建对象
//     es5: 通过函数内部的this来判断
//         this instanceof 构造函数名称
//     es6: new target 来判断
//         如果, 当前函数是用来创建对象的, new.target 就有东西
//         如果, 当前函数不是用来创建对象的, new.target === "undefided"

// number: 8 , 9 , 3 , 8.9
// string: "jadsf" , "zhangsaf"
// boolean: true, false
// undefined: undefined

// es6: 箭头函数
//     1. ()=>{}
//     2. 当参数为1个的时候,()可以省略
//     3. 当执行体只有一条语句的时候, {}可以省略
//     3.1 当只有一句执行体的时候, 省略{}的时候, return 必须省略
//     3.2 当箭头函数没有执行的时候, {}不能省略
//     3.3 如果返回一个对象的时候, 省略{} , 省略return, 此时对象的字面量写法,必须套在()中
//     4. 内部不存在this, this代表的是当前箭头函数所处的作用域
//     5. 不能当成构造函数来创建对象, 因为箭头函数内部没有[Construct]特性
//     6. 没有 prototype
//     7. 不具备 arguments 接受实参的特性
//     8. 箭头函数的 立即调用写法 (()=>{})()
//      8.1 普通函数的立即调用写法
//          8.1.1  (function () {} ())
//          8.1.2  function () {} ()
//     9. 不能 call applay bind


var p1 = {
    name: "zhangsan",
    aaa: function() {
        setTimeout( () => {
            this.xxx("6666")
        } , 1000)    
    },
    xxx: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    } 
}
p1.aaa()


// function xxx () {
//     console.log(this.name)
// }

// xxx()

// "use strict"

// let a = function () {
//     console.log("33333")
// }()



// (() => {
//     console.log("6666")
// })()


// let arr = [4 , 2 , 7 , 8 , 1]

// let arr2 = arr.sort((a , b) => b - a)
// console.log(arr2)


// // $.ajax("xxx" , function (res) {} , function (err) {})
// $.ajax("xxx" , res=>{} , err=>{})




// let xxx = function (a , b) {
//     console.log(arguments[0])
//     console.log(a + b)
// }
// // let xxx = (a , b) => {
// //     console.log(arguments[0])
// //     console.log(a + b)
// // }
// xxx(5 , 8)


// function Person(name) {
//     this.name = name
//     this.age = 12
//     this.run = function () {
//         console.log("xxxxx: " , this.name)
//         setInterval(() => {
//             console.log(this.name , ": 呼吸.....")
//         }, 1000);
//     }
// }
// var p1 = new Person("zhangsan")
// p1.run()
// let a = 9
// if (a > 7) {
//     function xxx() {
//         console.log("xxx")
//     }
// } else {
//     function yyy() {
//         console.log("yyy")
//     }
// }

// xxx()

// function xxx(a) {
//     执行体1
//     执行体2
// }
// (a)=>{执行体}

// let yyy = (a , b)=>return 执行体2



// function Person() {
//     if (typeof new.target !== "undefined") {
//         console.log("是在创建对象")
//     } else {
//         throw new Error("请用new 来调用该函数")
//     }
// }

// var p1 = new Person()

// Person.call(p1)

// Person ----->  new   ----> this  ---> p1
// Person ----->  ()    ----> this  ---> window



// var p1 = new Person()
// 1. {}
// 2. {}.__proto__ = Person.prototype
// 3. Person.call({})
// return {}

// function xxx() {

// }
// var p3 = new xxx()
// var p1 = new Person()
// var p2 = new Person()