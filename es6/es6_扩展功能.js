
// let b = "a"
// let c = "ge"
// let d = b + c

// 属性:值

// 值 : 可以是表达式
// 属性: 只能是字符长, 不能是表达式 
//     但是 [表达式]
    
// 对象的混合 
// 把 b , c , d 中的属性和方法, 全部合并进 a 对象中
// Object.assign(a , b , c , d)

// 做 更精确的判断
// +0  -0
// NaN NaN
// Object.is()

// 让某一个对象做为原型 去 创建新的对象
// let xin_duixiang = Object.create(对象)

// 获取 某一个对象的 原型
// Object.getPrototypeOf(对象)

// 将 某一个对象的原型 修改 成 狗
// Object.setPrototypeOf(对象 , 狗)


// 方法可以简写的
// {
//     run: function () {

//     }
// }
// {
//     run(){

//     }
// }

// let a = 6
// let b = 8;

// [a , b] = [b , a]
// console.log(a , b)

// let colors = [ "red", [14 , 25 , 38], "blue" ]; // 随后
// let [ a,  ...b] = colors;
// console.log(a , b)

let ren = {
    name: "zhangsan" , 
    age: 12 , 
    gf: {
        height: 180,
        weight: 179 , 
        mama: {
            name: "金莲",
            laogong: "大朗",
            hunwairen: ["西门庆" , "武松" , "小平" , "柯南"]
        }
    }
}


function xxx(a , b , {name , gf:age}) {
    console.log(a , b , name , age)
}

xxx(8 , 7 , ren)




// let {name:a = "王五" , b = 89 , age:c} = ren
// console.log(a , b , c)

// let name = "wangwu"
// let age = 12;

// function xxx(name , age) {
//     console.log(name , age)
// }

// xxx({name , age} = ren)


// let name
// let {name} = ren;
// let {name , age} = ren

// console.log(name , age)




// 序列化 与 反序列化
// JSON.parse('{"name": "zhangsan"}')
// JSON.stringify(obj)


// var obj = {
//     a: 1,
//     0: 1,
//     c: 1,
//     2: 1,
//     b: 1,
//     1: 1
// };
// obj.d = 1;

// console.log(Object.keys(obj))


// let a = {
//     name: "zhangsan"
// }

// let a = new Object({
//     name: "lisi"
// })

// let a = Object.create({
//     name: "王五"
// })

// console.log(a.name)

// let ren = {
//     eat () {
//         console.log("用筷子......")
//     }
// }
// let gou = {
//     eat () {
//         console.log("舔.....")
//     }
// }

// let pengpeng = Object.create(gou)

// // console.log(Object.getPrototypeOf(pengpeng) == ren)
// // pengpeng 该原型
// Object.setPrototypeOf(pengpeng , ren)
// console.log(Object.getPrototypeOf(pengpeng) == gou)



// function my_mixins(a , b) {
//     let b_keys = Object.keys(b)
//     b_keys.forEach(function (item , index) {
//         a[item] = b[item]
//     })
// }

// function Event() {
//     console.log("我是一个事件函数..")
// }

// Event.prototype = {
//     constructor: Event,
//     fa_she: function () {
//         console.log("发射....")
//     },
//     jian_ting: function () {
//         console.log("监听.....")
//     }
// }

// let a = {}
// let b = {name: "张三"}
// let c = {name: "lisi" , age: 12}
// let d = {eat: function () {console.log("吃饭....")}}

// Object.assign(a , b , c , d)
// console.log(a)

// let a = {}
// my_mixins(a , Event.prototype)
// console.log(a)
// a.fa_she()
// a.jian_ting()


// let zhangsan = {
//     "s1": 111,
//     "s2": 222,
//     "s3": 777
// }
// let lisi = {
//     "s3": 333,
//     "s4": 444,
// }

// my_mixins(zhangsan , lisi)
// console.log(zhangsan)





// let ren = {
//     name: "zhangsan",
//     [d]: 13,
//     run () {
//         console.log("run.....")
//     },  
//     eat() {
//         console.log("eat")
//     }
// }
// console.log(ren[b + c])