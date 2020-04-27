   /*导航栏红点*/
   $(function () {
    $("nav>ul li #home").click(function () {
        $("nav>ul li .one").show()
        $("nav>ul li .two").hide()
        $("nav>ul li .three").hide()
        $("nav>ul li .four").hide()

    })
    $("nav>ul li #mv").click(function () {
        $("nav>ul li .one").hide()
        $("nav>ul li .two").show()
        $("nav>ul li .three").hide()
        $("nav>ul li .four").hide()

    })
    $("nav>ul li #list").click(function () {
        $("nav>ul li .one").hide()
        $("nav>ul li .two").hide()
        $("nav>ul li .three").show()
        $("nav>ul li .four").hide()

    })
    $("nav>ul li #my").click(function () {
        $("nav>ul li .one").hide()
        $("nav>ul li .two").hide()
        $("nav>ul li .three").hide()
        $("nav>ul li .four").show()

    })
})

/*视频内红点*/
$(function () {
    $(".type div #default").click(function () {
        $(".type div .one").show()
        $(".type div .two").hide()
        $(".type div .three").hide()
        $(".type div .four").hide()

    })
    $(".type div #hot").click(function () {
        $(".type div .one").hide()
        $(".type div .two").show()
        $(".type div .three").hide()
        $(".type div .four").hide()

    })
    $(".type div #want").click(function () {
        $(".type div .one").hide()
        $(".type div .two").hide()
        $(".type div .three").show()
        $(".type div .four").hide()

    })
    $(".type div #dis").click(function () {
        $(".type div .one").hide()
        $(".type div .two").hide()
        $(".type div .three").hide()
        $(".type div .four").show()

    })
})

// 单击改变背景颜色
$(function () {
    $(".type_list div").click(function () {
        $(this).css({
            "background-color": "#db1623"
        }).click(function () {
            $(this).css({
                "background-color": "#1d1d21"
            })
        })
    })
})

//视频界面切换
$(function () {
    $(".play_warp .video .big_vodeo").click(function () {
        $(".play_warp .video").hide()
        $(".play_warp .video_details").show()

    })
    $(".play_warp .video_details .big_vodeo").click(function () {
        $(".play_warp .video").show()
        $(".play_warp .video_details").hide()

    })
})


// $(function () {
//     $(".film_show li a img").click(function () {
//         $(this).css({
//             "display": "none"
//         }), $(".video_part").css({
//             "display": "block"
//         })
//     })
// })
// $(function () {
//     $(".film_show li .video_part").click(function () {
//         $(this).css({
//             "display": "none"
//         }), $(".film_show li a img").css({
//             "display": "block"
//         })
//     })
// })
   $(function () {
        $(".film_show li a #img").click(function () {
            $(".film_show li a #img").hide()
            $(".film_show li .video_one").show()
        })
        $(".film_show li .video_one").click(function () {
            $(".film_show li .video_one").hide()
            $("#img").show()
        })
    })