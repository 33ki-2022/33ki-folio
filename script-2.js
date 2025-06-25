// script.js

jQuery(function () {
    var navLinks = jQuery('nav ul li a'); // ナビゲーションリンク全体を選択
    var headerBottom = jQuery('header').offset().top + jQuery('header').outerHeight(); // ヘッダーの最下部の位置を取得

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > headerBottom) {
            navLinks.addClass('invert'); // 全てのリンクにクラスを追加
        } else {
            navLinks.removeClass('invert'); // 全てのリンクからクラスを削除
        }
    });
});

// ScrollyVideoの初期化コードは、index.htmlの<body>の最後に移動することをおすすめします。