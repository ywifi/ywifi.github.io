// JavaScript Document
$(function() {
 //���� ������
 $(".home_down_title .button").hover(function(){
   var title3span=($(this).index());
   $(this).addClass("cur");$(this).siblings('.button').removeClass("cur");
   $(".home_down_box li").eq(title3span).addClass("cur");
   $(".home_down_box li").eq(title3span).siblings('.home_down_box li').removeClass("cur");
 });
 //�������������� չ����������
 $(".home_info_nore").click(function(){
   $('.home_info').css("display","block");
   $(".home_info_button").css("display","none");
 });
 //�����������
 $(".home_info_button").click(function(){
   $(this).css("display","none");
   $('.home_info').css("display","block");
   $('body,html').animate({scrollTop:800},300);return false;
 });
 //������ظ�������
 $(".home_info_title small").click(function(){
   $('.home_info').css("display","none");
   $('.home_info_button').css("display","block");
   $('body,html').animate({scrollTop:300},300);return false;
 });
 //��Ʒ���� ������
 $(".home_info_title span").click(function(){
   var title5span=($(this).index());
   $(this).addClass("cur");$(this).siblings('span').removeClass("cur");
   $(".home_info_box .hpbox").eq(title5span).addClass("cur");
   $(".home_info_box .hpbox").eq(title5span).siblings('.home_info_box .hpbox').removeClass("cur");
 });
 //��������л�
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
//-------------------ͶƱAJAX------------------
 function Ajax_vode(url){
 $.ajax({
	type:"GET",
	url:url,
	dataType:"html",//��������
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
//-------------------ͶƱ������------------------
var ie6=!-[1,]&&!window.XMLHttpRequest;//�ж�ie6
$(function() {
 $('.vote_bar').click(function(){
		var bh = $("body").height();//������߶�
		var bw = $("body").width();//������߶�
		var left =bw/2-250+"px";
		//������������ 250�ǵ�����ȳ�2
		$('.home_vote_tan').css("left",left);//������������  ��Ⱦ�������Ӧ
		$(".home_vote_tan").css('display','block');	
		$(".home_vote_tan").fadeTo(200,1.0);	
 }); 
 $('.exit').click(function(){ 
	 $(".home_vote_tan").fadeTo(200,0.0);
	    $(".home_vote_tan").css('display','none');	
 });   
});
if (ie6){
// ������ �߶Ⱦ��У�IE6�ඥ�߾����������ã������Ի���
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