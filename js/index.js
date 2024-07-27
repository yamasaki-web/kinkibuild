/*-------------------------------
	loading
-------------------------------*/
//テキストのカウントアップ+バーの設定
// var bar = new ProgressBar.Line(loading__text, {//id名を指定
// 	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
// 	duration: 3000,//時間指定(1000＝1秒)
// 	strokeWidth: 0.2,//進捗ゲージの太さ
// 	color: '#a9894a',//進捗ゲージのカラー
// 	trailWidth: 0.2,//ゲージベースの線の太さ
// 	trailColor: '#f5efe2',//ゲージベースの線のカラー
// 	text: {//テキストの形状を直接指定
// 		style: {//天地中央に配置
// 			position: 'absolute',
// 			left: '50%',
// 			top: '50%',
// 			padding: '0',
// 			margin: '-30px 0 0 0',//バーより上に配置
// 			transform:'translate(-50%,-50%)',
// 			'font-size':'1rem',
// 			color: '$primary-color',
// 		},
// 		autoStyleContainer: false //自動付与のスタイルを切る
// 	},
// 	step: function(state, bar) {
// 		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
// 	}
// });

// //アニメーションスタート
// bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
// 	$("#loading__text").fadeOut(10);//フェイドアウトでローディングテキストを削除
// 	$(".loader__cover-up").addClass("cover-anime");//カバーが上に上がるクラス追加
// 	$(".loader__cover-down").addClass("cover-anime");//カバーが下に下がるクラス追加
// 	// $("#loading").fadeOut();//#splashエリアをフェードアウト
// });
