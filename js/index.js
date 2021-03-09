// 轮播图自动加载
document.addEventListener(
  "DOMContentLoaded",function(){
  // 调用秒杀
  miaosha();
  // 定义轮播图
  var pic = document.getElementById('L_pic').getElementsByTagName("li"),
      circle = document.getElementById('L_point').getElementsByTagName('li'),
      left = document.getElementById('left'),
      right = document.getElementById('right'),
      lunbo = document.getElementById('lunbo')
  //声明一个变量，获取图片和圆里面的数组下标，index等于几就是相对应下标的值
  index = 0,
  
  //声明变量保存一个空的定时器；
  timer = null;

  // 定义并调用自动播放函数
  timer = setInterval(autoPlay, 6000);

  // 鼠标划过整个容器时停止自动播放
  lunbo.onmouseover = function () {
    clearInterval(timer);
  }
  // 鼠标离开整个容器时继续播放至下一张
  lunbo.onmouseout = function (){
    timer = setInterval(autoPlay, 6000);
  }
  //自动播放，最后一张时，返回第一张
  function autoPlay(){
    if (++index >= pic.length){
      index = 0;
    }
    changePic(index);
  }
  // 定义图片切换函数
  function changePic (index) {
    for (var i = 0; i < pic.length; ++i) {
      //遍历pic里所有的元素，设置隐藏
      circle[i].style.background = "";
      circle[i].className = "";
      pic[i].style.opacity= 0;
      pic[i].style.zIndex = 0;
    }
      pic[index].style.zIndex = 1;
      circle[index].className='one';
      pic[index].style.opacity= 1;
  }

   // 遍历所有圆里的li的值，实现点击切换至对应的图片
  for( var i = 0;i < circle.length;i++ ){
    circle[i].onmousedown = function (){
      clearInterval(timer);
      // this：指向调用函数的对象
      //此处this拿的就是circle[i]对应的li标签
      index = this.getAttribute("value");
      //调用切换图片函数，将递增之后的index作为参数传过去
      changePic(index);
    } 
  }
  left.onmousedown = function(){
    clearInterval(timer);
     index--;
     if( index < 0 ){
       index = pic.length -1;
     }
     changePic(index);
  }
  right.onmousedown = function(){
    clearInterval(timer);
     index++;
     if( index > pic.length -1 ){
       index = 0;
     }
     changePic(index);
  }
  // console.log(pic)
})
// 闪购倒计时
function miaosha(){
  // 设置秒杀的时间，初始化
  timer1 = setTimeout("miaosha1(2020,12,21,10,00,00)",1000);
}
function miaosha1(year,month,day,hour,minute,second){
  let _hour=document.getElementById("L_hour");
  let _minute=document.getElementById("L_minute");
  let _seconds=document.getElementById("L_second");

  var leftTime = (new Date (year,month - 1,day,hour,minute,second))- (new Date());
  // console.log(leftTime);
  var hours = parseInt(leftTime/1000/3600%24,10);//毫秒的形式所以需要除1000  10进制
  var minutes = parseInt(leftTime/1000/60%60,10);//分钟
  var seconds = parseInt(leftTime/1000%60,10);//秒

  // 时间到了不再倒计时(用leftTime判断是否小于0)
  // console.log(seconds)
  if(leftTime < 0){
      clearTimeout(timer1);
      return
  }
  if(seconds<10) {
      _seconds.innerHTML = "0"+seconds;
  }else{
      _seconds.innerHTML  = seconds;
  }
  if(hours<10){
      _hour.innerHTML = "0"+hours
  }else{
      _hour.innerHTML = hours;
  }
  if(minutes<10){
      _minute.innerHTML =  "0"+ minutes ;
  }else{
      _minute.innerHTML  = minutes;
  }
  // 进入下一秒循环
  timer1 = miaosha();
}
// 轮播图侧边栏显示
var banner=["dd1","dd2","dd3"]
for(var i of banner){
  var i = document.getElementById(i);
}
var side=["d1","d2","d3"]
for(var i of side){
  i=document.getElementById(i);
}
d1.onmouseover = function (){
  dd1.style.display = "flex";
  dd1.style.cursor = "pointer";
}	
d1.onmouseout = function (){
  dd1.style.display = "none";
}
d2.onmouseover = function (){
  dd2.style.display = "flex";
  dd2.style.cursor = "pointer";
}	
d2.onmouseout = function (){
  dd2.style.display = "none";
}
d3.onmouseover = function (){
  dd3.style.display = "flex";
  dd3.style.cursor = "pointer";
}	
d3.onmouseout = function (){
  dd3.style.display = "none";
}
// 购物车滑动触发变色
var shopcar= document.getElementById("shop");
var menu=document.getElementById("menu");
var car= document.getElementsByClassName("shop")[0].getElementsByTagName("a")[0];

shopcar.onmouseenter=function(){
  car.style.background="white";
  shopcar.style.background="white";
  car.style.color="#ff6700";
  menu.style.height="100px"
  menu.innerHTML=`						
  <div class="loading" >
  <div class="loader"></div>
  </div>`
  var loading= document.getElementsByClassName("loading")[0];
  loading.style.display="block"
  if(false){
    menu.innerHTML=`	
    <div class="zero">购物车中还没有商品，赶紧选购吧！</div>`
    var zero= document.getElementsByClassName("zero")[0];
    console.log(zero);
    zero.style.display="block"
  }
}
shopcar.onmouseleave=function(){
  car.style.background="#424242";
  shopcar.style.background="#424242";
  car.style.color="#b0b0b0";
  menu.style.height="0px"
  var loading= document.getElementsByClassName("loading")[0];
  if(loading){
    loading.style.display="none";
  }
  var zero= document.getElementsByClassName("zero")[0];
  if(zero){
    zero.style.display="none";
  }
}
// 搜索栏滑动效果
var search=document.getElementsByClassName("site-search")[0];
var s_text=document.querySelector(".site-search .search-text");
var s_btn=document.querySelector(".site-search .search-btn");
var s_text_focus=false;
var search_move=false;
s_btn.onmousemove=function(){
  s_btn.style.borderColor="#ff6700";
}
s_btn.onmouseout=function(){
  if(!s_text_focus){
    if(search_move){
      s_btn.style.borderColor="#bbb";
    }else{
      s_btn.style.borderColor="#e0e0e0";
    }
  }
}
search.onmouseenter=function(){
  search_move=true
  if(!s_text_focus){
    s_text.style.borderColor="#bbb";
    s_btn.style.borderColor="#bbb";
  }
}
search.onmouseleave=function(){
  search_move=false
  s_text.style.borderColor="#e0e0e0";
  if(!s_text_focus){
    s_btn.style.borderColor="#e0e0e0"
  }
}
s_text.addEventListener('focus', function(){
  s_btn.style.borderColor="#ff6700";
  s_text_focus=true;
})
s_text.addEventListener('blur', function(){
  s_btn.style.borderColor="#e0e0e0";
  s_text_focus=false;
})
// 闪购右侧滑动效果
var flash_l=document.querySelector(".swiper-controls>div:first-child");
var flash_r=document.querySelector(".swiper-controls>div:last-child");
var flash_switch=document.getElementsByClassName("switch")[0];
flash_l.onmousedown=function(){
  if(flash_l.className!="disabled"){
    flash_l.className="disabled"
    flash_r.className=""
    flash_switch.style.transform="translate3d(0px, 0px, 0px)"
  }
  else return
}
flash_r.onmousedown=function(){
  if(flash_r.className!="disabled"){
    flash_r.className="disabled"
    flash_l.className=""
    flash_switch.style.transform="translate3d(-992px, 0px, 0px)"
  }
  else return
}
// 导航栏预览
var nav=["nav1","nav_a","nav2","nav_b"]
for(var i of nav){
  var i = document.getElementById(i);
}
var navA=document.getElementById("navA");
var navB=document.getElementById("navB");
nav1.onmouseover=function(){
  nav_a.style.borderTop="1px solid #ddd";
  if(navA.style.opacity="0"){
    navB.style.opacity="0";
    navA.style.opacity="1";
    nav_a.style.zIndex='10';
    nav_b.style.zIndex='9';
    nav_a.style.height="220px"
    nav_b.style.height="220px"
  }
}
nav2.onmouseover=function(){
  nav_b.style.zIndex='10';
  nav_b.style.borderTop="1px solid #ddd";
  if(navB.style.opacity="0"){
    navB.style.opacity="1";
    navA.style.opacity="0";
    nav_b.style.zIndex='10';
    nav_a.style.zIndex='9';
    nav_a.style.height="220px"
    nav_b.style.height="220px"
  }
}
nav1.onmouseout=function(){
  if(navB.style.opacity!="1"&&navA.style.opacity!="1"){
    nav_a.style.height="0";
    nav_b.style.height="0";
    nav_a.style.borderTop="";
    nav_b.style.borderTop="";
  }else{
    nav_a.style.height="0";
    nav_a.style.borderTop="";
    nav_b.style.height="0px"
  }
}
nav2.onmouseout=function(){
  if(navB.style.opacity!="1"&&navA.style.opacity!="1"){
    nav_a.style.height="0";
    nav_b.style.height="0";
    nav_a.style.borderTop="";
    nav_b.style.borderTop="";
  }else{
    nav_b.style.height="0";
    nav_b.style.borderTop="";
    nav_a.style.height="0px"
  }
}
// 家电右侧滑动效果
var jd_R1=document.querySelector("#L_jiadian a:first-child");
var jd_R2=document.querySelector("#L_jiadian a:last-child");
var hot=document.getElementById("L_hot")
var tv=document.getElementById("L_tv")
jd_R1.onmouseover=function(){
  jd_R1.className="actived";
  jd_R2.className="";
  hot.style.display="block";
  tv.style.display="none";
}
jd_R2.onmouseover=function(){
  jd_R2.className="actived";
  jd_R1.className="";
  hot.style.display="none";
  tv.style.display="block";
}
// 查看全部滑动触发变色
// phone
var more = document.getElementById("more").getElementsByTagName("a")[0];
var em = document.getElementById("more").getElementsByTagName("em")[0];
more.onmouseover = function (){
  em.style.backgroundColor="#ff6700";
  more.style.color="#ff6700";
}
em.onmouseover = function (){
  em.style.backgroundColor="#ff6700";
	more.style.color="#ff6700";
}
more.onmouseout = function (){
  em.style.backgroundColor="#b0b0b0";
	more.style.color="#424242";
}
em.onmouseout = function (){
  em.style.backgroundColor="#b0b0b0";
	more.style.color="#424242";
}
// video
var more1 = document.getElementById("more1").getElementsByTagName("a")[0];
var em1 = document.getElementById("more1").getElementsByTagName("em")[0];
more1.onmouseover = function (){
  em1.style.backgroundColor="#ff6700";
  more1.style.color="#ff6700";
}
em1.onmouseover = function (){
  em1.style.backgroundColor="#ff6700";
	more1.style.color="#ff6700";
}
more1.onmouseout = function (){
  em1.style.backgroundColor="#b0b0b0";
	more1.style.color="#424242";
}
em1.onmouseout = function (){
  em1.style.backgroundColor="#b0b0b0";
	more1.style.color="#424242";
}

// 底部图片变色
var img=document.getElementById("wx").querySelector('#wx+img')
var wx=document.getElementById("wx");
wx.onmousemove = function(){
  img.style.display='block'
  img.background= 'url(/images/wx@2x.png) 50% 0 no-repeat';
  img.backgroundSize='cover';
}
wx.onmouseout = function(){
  img.style.display='none';
}
// 视频鼠标经过事件
var v=document.querySelectorAll(".v ul li")
for(var i of v){
  i.onmouseover=function(){
    var j=this.querySelector("div span")
    j.style.border="2px solid #ff6700";
    j.style.backgroundColor="#ff6700"
  }
  i.onmouseout=function(){
    var j=this.querySelector("div span")
    j.style.border="2px solid #fff";
    j.style.backgroundColor="rgba(0,0,0,.6)"
  }
}
// 视频点击事件
// 打开
play=function(){
  var video1=document.getElementById("video1");
  video1.style.display="block";
  var v1=video1.getElementsByTagName("video")[0];
  v1.load();
  v1.play();
  video1.addEventListener("mousewheel",function(e){
    //阻止浏览器默认方法
    e.preventDefault();
   },false);
}
// 关闭
var close1=document.getElementById("close1");
close1.onclick=function(){
  var video1=document.getElementById("video1");
  video1.style.display="none";
  var v1=video1.getElementsByTagName("video")[0];
  v1.pause();
}
// 主页侧边栏
// 手机app
var phone_app=document.querySelector(".home-tool-bar>div:nth-child(1)")
var p_app=document.querySelector(".home-tool-bar div .img")
phone_app.onmouseenter=function(){
  let img=phone_app.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/2.png"
  let text=phone_app.getElementsByTagName("div")[0];
  text.style.color="#ff6700";
  p_app.style.display="block";
}
phone_app.onmouseleave=function(){
  let img=phone_app.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/1.png";
  let text=phone_app.getElementsByTagName("div")[0];
  text.style.color="#757575";
  p_app.style.display="none";
}
// 个人中心
var person_c=document.querySelector(".home-tool-bar>div:nth-child(2)")
person_c.onmouseenter=function(){
  let img=person_c.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/4.png"
  let text=person_c.getElementsByTagName("div")[0];
  text.style.color="#ff6700"
}
person_c.onmouseleave=function(){
  let img=person_c.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/3.png";
  let text=person_c.getElementsByTagName("div")[0];
  text.style.color="#757575"
}
// 售后服务
var af_sale=document.querySelector(".home-tool-bar>div:nth-child(3)")
af_sale.onmouseenter=function(){
  let img=af_sale.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/6.png"
  let text=af_sale.getElementsByTagName("div")[0];
  text.style.color="#ff6700"
}
af_sale.onmouseleave=function(){
  let img=af_sale.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/5.png";
  let text=af_sale.getElementsByTagName("div")[0];
  text.style.color="#757575"
}
// 人工服务
var person_s=document.querySelector(".home-tool-bar>div:nth-child(4)")
person_s.onmouseenter=function(){
  let img=person_s.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/8.png"
  let text=person_s.getElementsByTagName("div")[0];
  text.style.color="#ff6700"
}
person_s.onmouseleave=function(){
  let img=person_s.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/7.png";
  let text=person_s.getElementsByTagName("div")[0];
  text.style.color="#757575"
}
// 购物车
var shop_car=document.querySelector(".home-tool-bar>div:nth-child(5)")
shop_car.onmouseenter=function(){
  let img=shop_car.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/10.png"
  let text=shop_car.getElementsByTagName("div")[0];
  text.style.color="#ff6700"
}
shop_car.onmouseleave=function(){
  let img=shop_car.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/9.png";
  let text=shop_car.getElementsByTagName("div")[0];
  text.style.color="#757575"
}
// 返回顶部
var top_back=document.querySelector(".home-tool-bar>div:nth-child(6)")
window.onscroll = function () {
  scrollFunction()
};
function scrollFunction(){
  if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    top_back.style.display="flex"
  }else{
    top_back.style.display="none"
  }
}
top_back.onmouseenter=function(){
  let img=top_back.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/12.png"
  let text=top_back.getElementsByTagName("div")[0];
  text.style.color="#ff6700"
}
top_back.onmouseleave=function(){
  let img=top_back.getElementsByTagName("img")[0];
  img.src="images/home_tool_bar/11.png";
  let text=top_back.getElementsByTagName("div")[0];
  text.style.color="#757575"
}
top_back.onclick=function(){
  (function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo (0,currentScroll - (currentScroll/5));
    }
  })();
}