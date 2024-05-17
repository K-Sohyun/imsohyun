$(function () {

    //JQuery
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