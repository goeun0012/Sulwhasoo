$(function(){

    /* 언어 영역 */
    $(".select_language").click(function(){
        $(this).toggleClass("show");
    })// click

    /* 메뉴 영역 */
    $(".sub").hide();
    $(".gnb_menu > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $(".gnb_menu").stop().animate({height: "80px"}, 300);
    }, function(){
        $(this).find(".sub").stop().slideUp();
        $(".gnb_menu").stop().animate({height: "50px"}, 300);
    })

})// jquery