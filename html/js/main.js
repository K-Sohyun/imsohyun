$(function () {

    //로딩화면
    $('#loader').delay(1000).fadeOut(1000);

    //스크롤
    $('a').click(function () {
        $('html, body').animate({ 
            scrollTop: $($.attr(this, 'href')).offset().top
         }, 500);
        return false;
    });

    //헤더변경
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

    //포트폴리오
    $('.task_list > li').hide();
    $('.task_list > li').slice(0, 6).css("display", "block");
    $('#load_btn').click(function (e) {
        e.preventDefault();
        $('.task_list > li:hidden').slice(0, 6).fadeIn(300).css('display', 'block');
        if ($('.task_list > li:hidden').length == 0) {
            $('#load_btn').fadeOut(300);
        }
    });

    //AOS
    AOS.init();

});