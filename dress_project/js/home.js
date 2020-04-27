//导航条下划线
$(".head>.title>.home").click(function () {


    $(".head>.title>.home").css({
        "border-bottom": "1px solid black",
        
    })
    $(".head>.title>.all,.abouts,.team,.message").css({
        "border-bottom": "0px",
    })
})

$(".head>.title>.all").click(function () {

    $(".head>.title>.all").css({
        "border-bottom": "1px solid black",
    })
    $(".head>.title>.home,.abouts,.team,.message").css({
        "border-bottom": "0px",
    })
})

$(".head>.title>.abouts").click(function () {

    $(".head>.title>.abouts").css({
        "border-bottom": "1px solid black",
    })
    $(".head>.title>.all,.home,.team,.message").css({
        "border-bottom": "0px",
    })
})

$(".head>.title>.team").click(function () {

    $(".head>.title>.team").css({
        "border-bottom": "1px solid black",
    })
    $(".head>.title>.all,.abouts,.home,.message").css({
        "border-bottom": "0px",
    })
})

$(".head>.title>.message").click(function () {

    $(".head>.title>.message").css({
        "border-bottom": "1px solid black",
    })
    $(".head>.title>.all,.abouts,.team,.home").css({
        "border-bottom": "0px",
    })
})

//页面切换
$(document).ready(function () {

    $(".home").click(function () {

        $(".big_box").show();
        $(".all_warp").hide();
        $(".message_warp").hide();
        $(".team_warp").hide();
        $(".about_warp").hide();
        $(".inside_warp").hide();
        $(".details_warp").hide();

    });

    $(".all").click(function () {
        $(".all_warp").show();
        $(".big_box").hide();
        $(".message_warp").hide();
        $(".team_warp").hide();
        $(".about_warp").hide();
        $(".inside_warp").hide();
        $(".details_warp").hide();
    });


    $(".message").click(function () {
        $(".message_warp").show();
        $(".big_box").hide();
        $(".all_warp").hide();
        $(".about_warp").hide();
        $(".team_warp").hide();
        $(".inside_warp").hide();
        $(".details_warp").hide();

    });
    $(".team").click(function () {
        $(".team_warp").show();
        $(".big_box").hide();
        $(".all_warp").hide();
        $(".message_warp").hide();
        $(".about_warp").hide();
        $(".inside_warp").hide();
        $(".details_warp").hide();

    });
    $(".title>.head_list>ul>.one").click(function () {
        $(".about_warp").show();
        $(".big_box").hide();
        $(".all_warp").hide();
        $(".team_warp").hide();
        $(".message_warp").hide();
        $(".inside_warp").hide();
        $(".details_warp").hide();



    });
    /*商品详情页开启关闭*/
    $(".all_warp>.Commodity_list li").click(function () {

        $(".all_warp").hide();
        $(".message_warp").hide();
        $(".team_warp").hide();
        $(".about_warp").hide();
        $(".big_box").hide();

        $(".details_warp").show();

    });

    $(".details_warp>.show").click(function () {
        $(".all_warp").show();
        $(".details_warp").hide();
        $(".all_warp").hide();
        $(".message_warp").hide();
        $(".team_warp").hide();
        $(".about_warp").hide();
        $(".big_box").hide();

    });
    /*资讯详情页开启关闭*/
    $(".message_warp>.infor>ul>li").click(function () {
        $(".all_warp").hide();
        $(".message_warp").hide();
        $(".team_warp").hide();
        $(".about_warp").hide();
        $(".big_box").hide();

        $(".inside_warp").show();

    });

    $(".inside_warp>div").click(function () {
        $(".message_warp").show();
        $(".inside_warp").hide();
        $(".all_warp").hide();
        $(".message_warp").hide();
        $(".team_warp").hide();
        $(".about_warp").hide();
        $(".big_box").hide();

    });

});


// $(".head_list").mousemove(function () {
//     $(".head_list>li").css(function () {
//         background: red;
//     })
// })

/*鼠标移动时间*/
$(function () {
    $(".head>.title>.abouts").mousemove(function () {
        $(".title>.head_list").css("display", "block");
    })
    $(".about_warp").mousemove(function () {
        $(".title >.head_list").css("display", "none");
    });
    $(".head>.title>.all,.home,.team,.message").mousemove(function () {
        $(".title >.head_list").css("display", "none");
    });

 
 
});
$(function () {
    var oldColor = "";
    $(".head_list>ul>li").mouseover(function () {
        oldColor = $(this).css("background-color");
        $(this).css("background-color", "#F8F8F8");
    }).mouseout(function () {
        $(this).css("background-color", oldColor);
    });
});