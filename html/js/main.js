$(function () {

    //헤더 스크롤
    var lastT = 0;
    $(window).scroll(function () {
        var nowT = $(this).scrollTop();

        if (nowT > lastT) {
            $('#hd').stop().slideUp();
        } else if (nowT == 0) {
            $('#hd').removeClass('on');
        }
        else {
            $('#hd').stop().slideDown();
            $('#hd').addClass('on');
        }
        lastT = nowT;
    });

    //포트폴리오 로드
    $('.task_list > li').hide();
    $('.task_list > li').slice(0, 6).css("display", "block");
    $("#load_btn").click(function (e) {
        e.preventDefault();
        $('.task_list > li:hidden').slice(0, 6).fadeIn(300).css('display', 'block');
        if ($('.task_list > li:hidden').length == 0) {
            $('#load_btn').fadeOut(300);
        }
    });


    //GSAP
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: "#about .img_box",
        start: "top center",
        end: "bottom center",
        toggleClass: "on"
    });

    ScrollTrigger.create({
        trigger: "#about .text_box",
        start: "top center",
        end: "bottom center",
        toggleClass: "on"
    });

});