$(function () {

    // はじめのローディング時間
    $(window).on('load', function () {
        $("#splash").delay(1500).fadeOut('slow', function () {//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
            $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
            var h = $(window).height();//ブラウザの高さを取得
            $(".splashbg").css({
                "border-width": h,//ボーダーの太さにブラウザの高さを代入
                "animation-name": "backBoxAnime"//animation-nameを定義
            });
        });
        $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
    });

    //同じ日付で2回目以降ならローディング画面非表示の設定

// var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
// var myD = new Date();//日付データを取得
// var myYear = String(myD.getFullYear());//年
// var myMonth = String(myD.getMonth() + 1);//月
// var myDate = String(myD.getDate());//日
    
// if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
//         $("#splash").css("display", "block");//１回目はローディングを表示
//         setTimeout(function () {
//             $("#splash_logo").fadeIn(1000, function () {//1000ミリ秒（1秒）かけてロゴがフェードイン
//                 setTimeout(function () {
//             $("#splash_logo").fadeOut(1000);//1000ミリ秒（1秒）かけてロゴがフェードアウト
//                 }, 1000);//1000ミリ秒（1秒）後に処理を実行
//         setTimeout(function () {
//             $("#splash").fadeOut(1000, function () {//1000ミリ秒（1秒）かけて画面がフェードアウト
//             var myD = new Date();
//             var myYear = String(myD.getFullYear());
//             var myMonth = String(myD.getMonth() + 1);
//             var myDate = String(myD.getDate());
//             $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
//         });
//         }, 1700);//1700ミリ秒（1.7秒）後に処理を実行
//     });
// }, 1000);//1000ミリ秒（1秒）後に処理を実行
// }else {
//     $("#splash").css("display", "none");//同日2回目のアクセスでローディング画面非表示
// }  







    // ハンバーガー
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('open')
    });

    // トップまでのスクロール
    $('#page-top').click(function () {
        $('body,html').animate({
            scrollTop: 0//ページトップまでスクロール
        }, 1500,);//ページトップスクロールの速さ※数字が大きいほど遅くなる, easingプラグインでアニメーション速度に変化
        return false;//リンク自体の無効化
    });

    // トップページのスクロール
    $('.slider').slick({
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        speed: 300,//スライドのスピード。初期値は300。
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        centerMode: true,//要素を中央ぞろえにする
        variableWidth: true,//幅の違う画像の高さを揃えて表示
        dots: true,//下部ドットナビゲーションの表示
    });

    // コンテンツページのスクロール
    $('.slideshow').slick({
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        dots: true,//下部ドットナビゲーションの表示
        responsive: [
            {
                breakpoint: 769,//モニターの横幅が769px以下の見せ方
                settings: {
                    slidesToShow: 2,//スライドを画面に2枚見せる
                    slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
                }
            },
            {
                breakpoint: 426,//モニターの横幅が426px以下の見せ方
                settings: {
                    slidesToShow: 1,//スライドを画面に1枚見せる
                    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
                }
            }
        ]
    });

    // コンテンツページの横から表示
    $(window).scroll(function () {
        $(".up").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("slide-left");
            }
        });
    });
    // これを複数使う
    $(window).scroll(function () {
        $(".down").each(function () {

            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                // outerHeight()はpaddingを含めた高さを取得する
                $(this).addClass("slide-right");
            }
        });
    });

    // タブ
    //任意のタブにURLからリンクするための設定
    function GethashID(hashIDName) {
        if (hashIDName) {
            //タブ設定
            $('.tab li').find('a').each(function () { //タブ内のaタグ全てを取得
                var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
                if (idName == hashIDName) { //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
                    var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
                    $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
                    $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
                    //表示させるエリア設定
                    $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
                    $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
                }
            });
        }
    }

    //タブをクリックしたら
    $('.tab a').on('click', function () {
        var idName = $(this).attr('href'); //タブ内のリンク名を取得  
        GethashID(idName);//設定したタブの読み込みと
        return false;//aタグを無効にする
    });


    // 上記の動きをページが読み込まれたらすぐに動かす
    $(window).on('load', function () {
        $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
        $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
        var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
        GethashID(hashName);//設定したタブの読み込み
    });



    Resources

});