var one_img = $(".tabbar_item div img")
one_img.css({
    "height": one_img.width() + "px"
})

// 底部到行上的点击事件
$(".tabbar_item").click(function () {

    var that = this

    var dian_index = $(this).index()

    $(".tabbar_item").each(function (index, item) {
        if (dian_index == index) {
            var cur_src = $(item).find("img").attr("src")
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src", cur_src.replace(".png", "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src", cur_src.replace("_a", ""))

        }
    })


    $(".app_content>div").each(function (index, item) {
        if ($(that).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
})

////搜索框开启单击事件

$(".search_warp").click(function () {
    var that = this
    // if ($(that) == $(that)) {
    //     $(".sousuo_warp").css({
    //             "display": "block"
    //         })
    //     } 

    $(".app_content>div").each(function (index, item) {
        if ($(that) == $(that)) {
            $(".sousuo_wrap").css({
                "display": "none"
            })
            $(".shouye_wrap").css({
                "display": "none"
            })

        } else {
            $(".sousuo_wrap").css({
                "display": "block"
            })
            $(".shouye_wrap").css({
                "display": "none"
            })
        }
    })
})


////搜索框关闭单击事件
$(".quxiao").click(function () {
    var that = this

    $(".app_content>div").each(function (index, item) {
        if ($(that) == $(that)) {
            $(".sousuo_wrap").css({
                "display": "block"
            })
            $(".shouye_wrap").css({
                "display": "block"
            })

        } else {
            $(".sousuo_wrap").css({
                "display": "none"
            })
            $(".shouye_wrap").css({
                "display": "block"
            })
        }
    })

})


///看单列表单击事件
$(".my_text").click(function () {
    var that = this

    $(".box>div").each(function (index, item) {
        if ($(that) == $(that)) {
            $(".kandan_wrap").css({
                "display": "none"
            })
            $(".wode_wrap").css({
                "display": "none"
            })
            $(".app_tabbar").css({
                "display": "none"
            })
        } else {
            $(".kandan_wrap").css({
                "display": "block"
            })
            $(".wode_wrap").css({
                "display": "none"
            })
            $(".app_tabbar").css({
                "display": "none"
            })
        }
    })
})



///看单列表关闭单击事件
$(".exit_anniu").click(function () {
    var that = this

    $(".box>div").each(function (index, item) {
        if ($(that) == $(that)) {
            $(".kandan_wrap").css({
                "display": "block"

            })
            $(".wode_wrap").css({

                "display": "none"
            })
            $(".app_tabbar").css({
                "display": "none"

            })
        } else {
            $(".kandan_wrap").css({
                "display": "none"
            })
            $(".wode_wrap").css({
                "display": "block"

            })
            $(".app_tabbar").css({
                "display": ""

            })
        }
    })
})


// 视频详情开启点击事件

$(".click").click(function () {
    var that = this

    $(".box>div").each(function (index, item) {
        if ($(that) == $(that)) {
            $(".xiangqing_wrap").css({
                "display": "none"
            })
            $(".shouye_wrap").css({
                "display": "none"
            })
            $(".app_tabbar").css({
                "display": "none"
            })
        } else {
            $(".xiangqing_wrap").css({
                "display": "block"
            })
            $(".shouye_wrap").css({
                "display": "none"
            })
            $(".app_tabbar").css({
                "display": "none"
            })
        }
    })
})


// 视频详情关闭点击事件

$(".off").click(function () {
    var that = this

    $(".box>div").each(function (index, item) {
        if ($(that) == $(that)) {
            $(".xiangqing_wrap").css({
                "display": "block"
            })
            $(".shouye_wrap").css({
                "display": "none"
            })
            $(".app_tabbar").css({
                "display": "none"
            })
        } else {
            $(".xiangqing_wrap").css({
                "display": "none"
            })
            $(".shouye_wrap").css({
                "display": "block"
            })
            $(".app_tabbar").css({
                "display": ""
            })
        }
    })
})
