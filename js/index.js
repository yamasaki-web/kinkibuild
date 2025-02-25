//ティッカースライド
$(function () {
	$('.ticker .ticker__text').infiniteslide({
		direction: 'left',
		speed: 20,
		clone: 5,
		pauseonhover: false
	});
});

// mv 自動再生
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  if (video) {
    video.muted = true; // 明示的にミュートを設定
    video.play().catch(error => console.error("再生エラー:", error)); // エラーをキャッチ
  }
});
