$(function () {

    //로딩화면
    $('#loader').delay(1000).fadeOut(1000);

    //스크롤 애니메이션
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    //헤더 스타일변경
    let winW;
    let setT = 0;

    function winSize() {
        winW = window.innerWidth;
    } winSize();

    function hdHeight() {
        if (winW > 1024) {
            $('#hd').css({ 'height': '75px', 'padding': '0px 40px' });
        } else if (winW > 768) {
            $('#hd').css({ 'height': '65px', 'padding': '0px 15px' });
        } else {
            $('#hd').css({ 'height': 'auto', 'padding': '15px 10px' });
        }
    } hdHeight();

    $(window).resize(function () {
        winSize();
        hdHeight();
    });


    $(window).scroll(function () {
        let nowT = $(this).scrollTop();

        if (nowT > setT) {
            $('#hd').stop().slideUp();
        } else if (nowT == 0) {
            $('#hd').removeClass('on');
        }
        else {
            $('#hd').stop().slideDown();
            $('#hd').addClass('on');
        }
        setT = nowT;
    });

    //포트폴리오 더보기
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