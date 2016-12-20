// JavaScript Document
$(function() {
 //下载 滑动门
 $(".home_down_title .button").hover(function(){
   var title3span=($(this).index());
   $(this).addClass("cur");$(this).siblings('.button').removeClass("cur");
   $(".home_down_box li").eq(title3span).addClass("cur");
   $(".home_down_box li").eq(title3span).siblings('.home_down_box li').removeClass("cur");
 });
 //导航点击软件介绍 展开更多内容
 $(".home_info_nore").click(function(){
   $('.home_info').css("display","block");
   $(".home_info_button").css("display","none");
 });
 //点击更多内容
 $(".home_info_button").click(function(){
   $(this).css("display","none");
   $('.home_info').css("display","block");
   $('body,html').animate({scrollTop:800},300);return false;
 });
 //点击隐藏更多内容
 $(".home_info_title small").click(function(){
   $('.home_info').css("display","none");
   $('.home_info_button').css("display","block");
   $('body,html').animate({scrollTop:300},300);return false;
 });
 //产品介绍 滑动门
 $(".home_info_title span").click(function(){
   var title5span=($(this).index());
   $(this).addClass("cur");$(this).siblings('span').removeClass("cur");
   $(".home_info_box .hpbox").eq(title5span).addClass("cur");
   $(".home_info_box .hpbox").eq(title5span).siblings('.home_info_box .hpbox').removeClass("cur");
 });
 //合作伙伴切换
 $(".qhbutton em").click(function(){
   var title6span=($(this).index());
   $(this).addClass("cur");$(this).siblings('em').removeClass("cur");
   $(".linkimgbox .linkimg").eq(title6span).fadeIn();
   $(".linkimgbox .linkimg").eq(title6span).siblings('.linkimgbox .linkimg').fadeOut();
 });
 $(".linkimg li").hover(function(){
	var thumbOver = $(this).find("img").attr("src");
	$(this).find("a.name").css({'background' : 'url(' + thumbOver + ') no-repeat 0px -50px'});
	$(this).find("a.name").show();
	},function(){
	$(this).find("a.name").hide();
 });
});
//-------------------投票AJAX------------------
 function Ajax_vode(url){
 $.ajax({
	type:"GET",
	url:url,
	dataType:"html",//返回类型
	beforeSend:function(XMLHttpRequest)
	{},
	success:function(data)
	{   
		//alert(data);
   		$("#votebox").html(data);
	},
	error:function()
	{}
  });
 }
 //Ajax_vode('/e/extend/vote/');
//-------------------投票弹出层------------------
var ie6=!-[1,]&&!window.XMLHttpRequest;//判断ie6
$(function() {
 $('.vote_bar').click(function(){
		var bh = $("body").height();//浏览器高度
		var bw = $("body").width();//浏览器高度
		var left =bw/2-250+"px";
		//弹出层距左距离 250是弹窗宽度除2
		$('.home_vote_tan').css("left",left);//弹出层距左距离  宽度居中自适应
		$(".home_vote_tan").css('display','block');	
		$(".home_vote_tan").fadeTo(200,1.0);	
 }); 
 $('.exit').click(function(){ 
	 $(".home_vote_tan").fadeTo(200,0.0);
	    $(".home_vote_tan").css('display','none');	
 });   
});
if (ie6){
// 弹出框 高度居中，IE6距顶边距在这里设置，浮动对话框
$(document).ready(function() {   
    var domThis = $('.home_vote_tan')[0];   
    var wh = $(window).height() / 3;
    $("body").css({
        "background-image": "url(about:blank)",
        "background-attachment": "fixed"
    });   
    domThis.style.setExpression('top', 'eval((document.documentElement).scrollTop + ' + wh + ') + "px"');
}); 
}