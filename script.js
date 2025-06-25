new ScrollyVideo({
    scrollyVideoContainer: "scrolly-video",
    src: "videos/pre1.MP4"
});


// const element = document.querySelector('.element');

// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;
//     const height = element.offsetHeight;
//     const color = `rgb(${scrolled % 255}, ${height % 255}, ${(scrolled + height) % 255})`;
//     element.style.backgroundColor = color;
// });

jQuery(function () {

    var logo = jQuery('#logo');
    var height = jQuery(window).height(); //ウィンドウの高さ
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > height) { //スクロールが画面の高さを越えたら
            logo.addClass('invert');
        } else { //スクロールが画面の高さを越えなければ
            logo.removeClass('invert');
        }
    });

});