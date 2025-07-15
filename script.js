// DOMが読み込まれたら実行
window.addEventListener('DOMContentLoaded', () => {

    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // data-filterの値を取得
            const filter = button.getAttribute('data-filter');

            // activeクラスの切り替え
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // アイテムの表示・非表示を切り替え
            workItems.forEach(item => {
                // "すべて"が選択された場合、またはアイテムがフィルタのクラスを持っている場合
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.add('show');
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                    item.classList.remove('show');
                }
            });
        });
    });
});

// script.js

// jQuery(function () {
//     var navLinks = jQuery('nav ul li a'); // ナビゲーションリンク全体を選択
//     var headerBottom = jQuery('header').offset().top + jQuery('header').outerHeight(); // ヘッダーの最下部の位置を取得

//     jQuery(window).scroll(function () {
//         if (jQuery(this).scrollTop() > headerBottom) {
//             navLinks.addClass('invert'); // 全てのリンクにクラスを追加
//         } else {
//             navLinks.removeClass('invert'); // 全てのリンクからクラスを削除
//         }
//     });
// });

// ScrollyVideoの初期化コードは、index.htmlの<body>の最後に移動することをおすすめします。