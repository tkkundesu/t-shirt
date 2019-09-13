// メニューバー
$(function() {
   $(".list a").hide();
  $('.fa i').click(function() {
    $('.list a').slideToggle("slow");

  });
// 画像スライドショー
　var page=0;

 var lastpage=parseInt($(".top-wrapper img").length-1);
 $(".top-wrapper img").css("display","none");
 $(".top-wrapper img").eq(page).css("display","block");

 
function changepage(){
	$(".top-wrapper img").fadeOut(1000);
	$(".top-wrapper img").eq(page).fadeIn(1000);
}


 function starttimer(){
 	timer=setInterval(function(){
    if(page===lastpage){
    page=0;
    changepage();
    }else{
    page++;
    changepage();	
    };
 	},5000);
 }

 function stopTimer(){
clearInterval(Timer);
}

starttimer();
// フォームの入力箇所伸縮
 $("textarea").focusin(function(){
 	$(this).css("height","150px");
 	$(this).css("width","300px");
 });
 $("textarea").focusout(function(){
 	$(this).css("height","80px");
 	$(this).css("width","180px");
 });
// 画像浮き上がり
 $(function(){
 	$(".about img").hide().fadeIn(3000);
 });
 	 $(function(){
 	$(".slide img").hide().fadeIn(3000);
 });
 	
// 可視範囲に入ったときフェードイン
 $(".fade").css("opacity","0");	
 $(window).scroll(function(){
 	$(".fade").each(function(){
 	var imgpos=$(this).offset().top;
 	var scroll=$(window).scrollTop();
 	var windowheight=$(window).height();
 	if(scroll>imgpos-windowheight+windowheight/5){
 		$(this).css("opacity","1");
 	}else{
 		$(this).css("opacity","0");
 	}	
 	});
 	
 });


});   
