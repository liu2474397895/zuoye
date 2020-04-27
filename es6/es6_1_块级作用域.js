// // var a;
// // int a;
// // 编译  ----->   运行

// // 内存释放

// // 引用计机制
// // retain release

// // 垃圾回收机制


// function aaa() {
//     var a = 7
//     var arr = []
//     for (var i = 0; i < 4; i++) {
//         arr.push((function () {
//             console.log(a)
//         }()))
//         a++
//     }
//     return arr
// }

// var bbb = aaa()

// for (var i = 0; i < bbb.length; i++) {

// }


// // function xxx () {
// //     var sb = 9
// //     $(".button").each(function (index , item) {

// //         $(item).click(function () {
// //             console.log(sb) 
// //         })

// //         sb++
// //     })
// // }

// // xxx()


// var a = 6
// function xxx() {
//     var b = 8
//     let b = 7
// }

// for () {
//     let d = 7
//     var c = 9
// }

// c

// let: 
//    1. 块级作用域的特点
//    2. 没有变量声明前置的问题
//    3. 在同一个块级作用域中,不能重复声明变量
//    4. 嵌套作用域中, 可以重复声明变量
//    5. let/const: 对全局变量中的属性起到一个屏蔽(不是覆盖也不是替换)的作用
//    6. 闭包的快速解决办法(块级作用域的问题)
// const:
//     1. 常量不能被修改(注意对象属性的引用问题)
//     2. 常量在定义的时候, 必须被初始化
//     3. for 循环中 可以使用const, 
//          只要不修改就行(比如: for in 遍历对象的时候)


// for (let i = 0; i < 4; i++) {
//     console.log(i)
// }

// for (let i = 0; i < 1; i++) {
//     console.log(i)
// }

// var a = {
//     name: "zhangan",
//     age: 12
// }

// for (const key in a){
//     console.log(key)
// }

// var funcs = []
// for (let i = 0; i < 10; i++) {
//     funcs.push(function () {
//         console.log(i)
//     })
// }

// funcs.forEach(function (xiao_f) {
//     xiao_f()
// }) 

// if (true) {



//     let a = 8
//     console.log(a)
// }  

// typeof a


// console.log(typeof jlkasdf)


// const a = 8
// a = 

// const a = {
//     name: "zhangsan "
// }
// // a.name = "lisi"
// a = {
//     name: "lisi"
// }
// console.log(a)


// function xxx() {
//     // var a = 8
//     // let a = 8
//     a = 8
// }

// console.log(b)
// let b = 9

// if (true) {
//     var a = 8
//     let b = 9
// }

// console.log(a)
// console.log(b)


// for (let i = 0; i < 5; i++) {
//     // console.log(i)
// }

// console.log(i)


// SyntaxError: 语法规则错误
// identifier: 标示符
// declare: 声明
// assignment: 布置 分派
// constant: 不可变的
// const: 常量
// variable: 可变的
// var: 变量
// initializer: 初始化
// Missing: 丢失

// const a;
// let a;
// console.log(a)
// console.log(global)


// let a = 8

// if (true){
//     let a = 9
//     if (true) {
//         // let a = 8
//         console.log(a)
//     }
// }

