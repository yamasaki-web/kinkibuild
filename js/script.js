(function ($) {
  /*-------------------------------
		iPhone/iPad class
	-------------------------------*/
  var ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf("iPhone") > 0) {
    $("body").addClass("iPhone");
  } else if (
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document)
  ) {
    $("body").addClass("iPad");
  }

  /*-------------------------------
		ロード判定
	-------------------------------*/
  setTimeout(function () {
    $("body").addClass("js-ready");
  }, 200);

  $(window).on("load", function () {
    $("body").addClass("js-loaded");
  });

  //loading
  var webStorage = function () {
    if (sessionStorage.getItem("access")) {
    } else {
      sessionStorage.setItem("access", 0);
      let body = document.body;
      body.classList.add("once");
    }
  };
  webStorage();

  /*-------------------------------
		スクロール判定
	-------------------------------*/
  $(window).on("load scroll", function () {
    var s_top = $(window).scrollTop();
    if (s_top > 0) {
      $("body").addClass("js-scrolled");
    } else {
      $("body").removeClass("js-scrolled");
    }
  });

  /*----------------------------------------------------
		ページトップ フッター上で止める
	-----------------------------------------------------*/
  function pagetopStop() {
    const documentHeight = $(document).height();
    const scrollPosition = $(this).height() + $(this).scrollTop();
    const footerHeight = $(".footer__copyright").innerHeight();
    const Target = $(".pagetop");
    const isMediaPC = window.matchMedia("(min-width: 835px)").matches;
    // const fixedConvertionHeight = $(".fixed_convertion").innerHeight();
    const isLowerKyujinD = $("body").hasClass("lower-kyujin_d"); // Check if body has class 'lower-kyujin_d'

    // 通常ページ
    if (isMediaPC) {
      // PC表示の時の処理
      if (documentHeight - scrollPosition <= footerHeight) {
        if (isLowerKyujinD) {
          Target.css({
            position: "absolute",
            bottom: footerHeight + 100, // Adjusted bottom value for lower-kyujin_d class
          });
        } else {
          Target.css({
            position: "absolute",
            bottom: footerHeight + 48,
          });
        }
      } else {
        Target.css({
          position: "fixed",
          bottom: isLowerKyujinD ? 110 : 35, // 40 when isLowerKyujinD is true, otherwise 32
        });
      }
    } else {
      // スマホ表示の時の処理
      if (documentHeight - scrollPosition <= footerHeight) {
        if (isLowerKyujinD) {
          Target.css({
            position: "absolute",
            bottom: footerHeight + 100, // Adjusted bottom value for lower-kyujin_d class
          });
        } else {
          Target.css({
            position: "absolute",
            bottom: footerHeight + 32,
          });
        }
      } else {
        Target.css({
          position: "fixed",
          bottom: isLowerKyujinD ? 40 : 40, // 40 when isLowerKyujinD is true, otherwise 16
        });
      }
    }
  }
  $(window).scroll(function () {
    pagetopStop();
  });

  /*-------------------------------
		aのクリックイベント
	-------------------------------*/
  $("body").on("click", "a", function (e) {
    var str = this.getAttribute("href").substring(0, 1),
      $linktype = $(this).attr("target"),
      $call = this.getAttribute("href").substring(0, 3);

    if (str === "#") {
      //スムーズスクロールをさせる
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=' + this.hash.slice(1) + ']");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            700
          );
          return false;
        }
      }
    } else if ($linktype == "_blank" || $call == "tel") {
      //何もしない
    }
  });
})(jQuery);

/*-------------------------------
	ハンバーガーメニュー
-------------------------------*/
const hamburger_btn = document.querySelectorAll(".-hamburger");
const hamburger_menu = document.querySelector(".hamburger");
for (let i = 0; i < hamburger_btn.length; i++) {
  hamburger_btn[i].addEventListener("click", function () {
    if (hamburger_menu.classList.contains("js-open")) {
      hamburger_menu.classList.remove("js-open");
      this.classList.remove("js-open");
    } else {
      hamburger_menu.classList.add("js-open");
      this.classList.add("js-open");
    }
  });
}

/*-------------------------------
	スクロールアクション
-------------------------------*/
function scrollAnime() {
  const animation = document.querySelectorAll(".anime");
  const animationArray = Array.prototype.slice.call(animation, 0);

  const options = {
    root: null,
    rootMargin: "-200px 0px -200px",
    threshold: 0,
  };
  const observer = new IntersectionObserver(doWhenIntersect, options);
  animationArray.forEach(function (animation) {
    observer.observe(animation);
  });

  function doWhenIntersect(entries) {
    const entriesArray = Array.prototype.slice.call(entries, 0);

    entriesArray.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("js-active");
      }
    });
  }
}
scrollAnime();

//ロード時、ウィンドウ内に入っている要素は強制的に表示
function loadActive() {
  $(".anime").each(function () {
    var targetAnime = $(this).offset().top;
    var windowHeight = $(window).height();
    if (targetAnime < windowHeight) {
      $(this).addClass("js-active");
    }
  });
}
loadActive();

/*-------------------------------
	文字列を分割
-------------------------------*/
function spanWrap(targetElm) {
  const targets = [].slice.call(document.querySelectorAll(targetElm));
  targets.forEach(function (target) {
    const nodes = [].slice.call(target.childNodes);
    let spanWrapText = "";

    nodes.forEach(function (node) {
      if (node.nodeType == 3) {
        //テキストの場合
        const text = node.textContent.replace(/\r?\n/g, ""); //テキストから改行コード削除
        //spanで囲んで連結
        spanWrapText =
          spanWrapText +
          text.split("").reduce(function (acc, v) {
            return acc + "<span class=word><span>" + v + "</span></span>";
          }, "");
      } else {
        //テキスト以外
        //<br>などテキスト以外の要素をそのまま連結
        spanWrapText = spanWrapText + node.outerHTML;
      }
    });

    target.innerHTML = spanWrapText;
  });
}
spanWrap(".split");
$(".split span").each(function () {
  var txt = $(this).html();
  $(this).html(txt.replace(" ", "&nbsp;"));
});

/*-------------------------------
	アコーディオン
-------------------------------*/
var accordionItems = document.getElementsByClassName('accordion-item');
Array.from(accordionItems).forEach(function(item) {
  var header = item.querySelector('.accordion-header');
  var content = item.querySelector('.accordion-content');

  header.addEventListener('click', function() {
    item.classList.toggle('-open');
  });
});
