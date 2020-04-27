// let price = 100
// let number = 20
// let res = `this cloth's price is ${price} , i buy ${number} , pay total money ${(price * number).toFixed(2)}`
// console.log(res)


// 普通函数
//     :内部 默认有一个 arguments
//         接受调用者传递进来的实参
//     :内部 默认有一个 [call] [constructor]
//         当函数被 普通调用的时候 ---> call
//         当函数 被 new 调用的时候  ---> constructor
//         可以用来创建对象
// //         也称之为 构造函数

// 参数: 
//     1. 普通参数
//     2. 默认值参数
            // 参数的默认值: 是一个表达式
            // 也可以是, 前面的某一个参数
            // 但就是不能是 后面的某一个参数
//     3. 剩余参数 ...c
        // ...: 当 ... 作为形参的时候, 是 剩余参数
        //      当 ... 作为实参的时候, 是 扩展运算符

// 实参传递的目标: 
//     1.形参
//     2.arguments

//     在 非严格模式 下: 形参 和 arguments 是相通的
//     在 严格模式 下: .........  是 不相通的
//     当 碰到 默认值参数的时候, 
//         不管 什么模式  都是 不相通 的

// 事件函数: 内部 会有一个 event 对象

// 具名参数:

// 赋值符号 = : 把 赋值符号 右侧 的 表达式的 结果 赋值给 赋值符号 左侧的 变量
// 语句: 表达式 + ;
// 表达式: 变量 || 常量 || 运算符 组合在一起


// function xxx() {

// }
// var a = new xxx()
//     1. 创建一个临时对象
//         sb = {}
//     2. sb.__proto__= xxx.prototype
//     3. xxx.call(sb)


// function xxx(a) {
//     this.name = a
// }

// // let a = xxx()
// let a = new xxx("lisi")
// console.log(a)










// var arr = [5 , 7 , 8 , 6 , 3 , 1 , 9]

// console.log(...arr)


// function add (a , b , c , ...f) {
//     console.log(a , b , c , f)
// }

// add(...arr)
// console.log(add.length)
// ajax
//     llasdf
//     lajksdf
//     var aaa = req.responseText



// let aaa = `function add(a , b) {
//     console.log(a + b)
// }`
// let aaa = "console.log('888888')"
// eval(aaa)

// add(8 , 9)

// function aaad() {

// }

// let jia = new Function("a" , "b" , "c = 5" , "...d" , "console.log(d);return a + b + c")
// let res = jia(8 , 7 , 7 , 9 , 7 , 3 , 5)
// console.log(res)


// function xxx() {

// }
// console.log(xxx.name)

// let yyy = function () {

// }
// console.log(yyy.name)

// let xxx = function yyy() {

// }
// console.log(xxx.name)

// let aaa = function xxx() {

// }

// let xxx = new Function('console.log("88888")')
// console.log(xxx.name)

// xxx()




// "use strict"
// function add(first = `zankenan`.toUpperCase(), second){
//     first = "wangwu"
//     console.log(first == arguments[0])
// }

// add("zhangsan" , "lisi")

// var res = add(2 , 8 , 9 , 7 , 6)
// console.log(res)


// let per = {
//     name: "zhangsan",
//     age: 12 , 
//     chongwu: {
//         name: "乔治",
//         age: 2 , 
//         lingdang: {
//             color: "yellow",
//             size: "4cm",
//             zuanshi: {

//             }
//         }
//     }
// }
// console.log(per.chongwu.lingdang.size)
// if (per) {
//     if (per.chongwu) {
//         if (per.chongwu.lingdang) {
//             if (per.chongwu.lingdang.size) {
//                 console.log(per.chongwu.lingdang.size)
//             }
//         }
//     }
// }

// console.log(per && per.chongwu && per.chongwu.lingdang && per.chongwu.lingdang.size)

// console.log(per?.chongwu?.lingdang?.size)