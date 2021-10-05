// ①商品分类列表的隐藏栏——二级导航
//获取DOM元素
var class_li1_none = document.getElementsByClassName("class-li1-none");
var ul_class = document.getElementsByClassName("ul-class")[0];
var ul_children = ul_class.children;
for (let i = 0; i < ul_children.length; i++) {
  var index;
  var index2;
  // 为每一个li元素添加index的属性
  ul_children[i].index = i;
  // 为每一个隐藏框添加index2属性
  class_li1_none[i].index2 = i;
  ul_children[i].addEventListener("mouseover", function () {
    class_li1_none[i].style.display = "block";
  });
  ul_children[i].addEventListener("mouseout", function () {
    class_li1_none[i].style.display = "none";
  });
}

// 放大镜
var phone_none_sec_block1=document.querySelector('.phone-none-sec-block1');
var phone_none_sec1=document.querySelector('.phone-none-sec1');
var phone_none_sec_block2=document.querySelector('.phone-none-sec-block2');
var phone_none_sec2=document.querySelector('.phone-none-sec2');
var phone_none_sec_block3=document.querySelector('.phone-none-sec-block3');
var phone_none_sec3=document.querySelector('.phone-none-sec3');
var phone_none_sec_block4=document.querySelector('.phone-none-sec-block4');
var phone_none_sec4=document.querySelector('.phone-none-sec4');

phone_none_sec_block1.onmouseover=function(){
  phone_none_sec1.style.display='block';
}
phone_none_sec_block1.onmouseout=function(){
  phone_none_sec1.style.display='none';
}
phone_none_sec_block2.onmouseover=function(){
  phone_none_sec2.style.display='block';
}
phone_none_sec_block2.onmouseout=function(){
  phone_none_sec2.style.display='none';
}
phone_none_sec_block3.onmouseover=function(){
  phone_none_sec3.style.display='block';
}
phone_none_sec_block3.onmouseout=function(){
  phone_none_sec3.style.display='none';
}
phone_none_sec_block4.onmouseover=function(){
  phone_none_sec4.style.display='block';
}
phone_none_sec_block4.onmouseout=function(){
  phone_none_sec4.style.display='none';
}

// 输入框
var input_search=document.querySelector('.input-search');
var searchInput_none=document.querySelector('.searchInput-none');
input_search.onfocus=function(){
  searchInput_none.style.display='block';
}
input_search.onblur=function(){
  searchInput_none.style.display='none';
}
// ②BOM商家自动轮播
// 设置间歇定时器——封装
function moveAnimation2(ele, target) {
  // 使用DOM元素,用定时的id值来添加DOM元素属性
  clearInterval(ele.interId);
  // 获取定时器的id
  ele.interId = setInterval(function () {
    if (ele.offsetLeft == target) {
      clearInterval(ele.interId);
    } else {
      var slowStep = (target - ele.offsetLeft) / 10;
      slowStep = slowStep > 0 ? Math.ceil(slowStep) : Math.floor(slowStep);
      ele.style.left = ele.offsetLeft + slowStep + "px";
    }
  }, 20);
}
// 排他函数——封装
function backcircle(ele) {
  for (var j = 0; j < ele.length; j++) {
    ele[j].className = "circle";
  }
}

// 中间轮播图——最大
// 获取元素
var circle = document.getElementsByClassName("circle");
// 获取ul
var img_autoplay = document.getElementsByClassName("img-autoplay")[0];
// 用flag1记录圆点的索引
var flag1 = 0;
// 用count1来记录图片的索引
var count1 = 0;
// 自动播放轮播图
function preMove() {
  img_autoplay.ID = setInterval(function () {
    // 如果当前的图片是ul最后的孩子，则拉回图片，并且显示第2张图片
    if (count1 == img_autoplay.children.length) {
      img_autoplay.style.left = 0;
      console.log("拉回");
      count1 = 1;
    }
    backcircle(circle);
    circle[flag1].className = "circle active";
    // ②移动当前的ul使图片进行移动
    var target3 = count1 * (-600);
    // 走动画
    moveAnimation2(img_autoplay, target3);
    flag1++;
    count1++;
    if (flag1 == circle.length) {
      flag1 = 0;
    }
  }, 1200);
}
preMove();
// 焦点轮播
for (var i1 = 0; i1 < circle.length; i1++) {
  // 保存i值
  circle[i1].index1 = i1;
  circle[i1].onclick = function () {
    flag1 = this.index1;
    count1 = this.index1;
    // 排他
    backcircle(circle);
    this.className = "circle active";
    // ul进行移动
    var target1 = this.index1 * (-600);
    moveAnimation2(img_autoplay, target1);
  };
}
// 当鼠标移动到ul时，轮播图停止
img_autoplay.onmouseover = function () {
  clearInterval(img_autoplay.ID);
}
img_autoplay.onmouseout = function () {
  // 轮播图开始
  preMove();
}

// 品质保障
var baozhang_a = document.getElementsByClassName('baozhang-a');
var pz_none1 = document.getElementsByClassName('pz-none1')[0];
var pz_none2 = document.getElementsByClassName('pz-none2')[0];
var pz_none3 = document.getElementsByClassName('pz-none3')[0];

baozhang_a[0].onmouseover = function () {
    pz_none1.style.display = 'block';
    pz_none2.style.display = 'none';
    pz_none3.style.display = 'none';
}
baozhang_a[1].onmouseover = function () {
    pz_none2.style.display = 'block';
    pz_none3.style.display = 'none';
    pz_none1.style.display = 'none';
}
baozhang_a[2].onmouseover = function () {
    pz_none3.style.display = 'block';
    pz_none1.style.display = 'none';
    pz_none2.style.display = 'none';
}


// 推荐好货、今日特价轮播图
// 获取ul元素
var conter_auto = document.getElementsByClassName('conter-auto')[0];
var conter=document.getElementsByClassName('conter');
// 自动轮播
function conter_autoplay() {
  var con = 1;
  conter_auto.conterID = setInterval(function () {
    con++;
    if (con == conter_auto.children.length - 1) {
      conter_auto.style.top = 0;
      con = 1;
    }
    var flagcon = con * (-20);
    moveAnimationcon(conter_auto, flagcon);
  }, 500);
}
conter_autoplay();
// 封装向上定时器
function moveAnimationcon(ele, target) {
  // 使用DOM元素,用定时的id值来添加DOM元素属性
  clearInterval(ele.interId);
  // 获取定时器的id
  ele.interId = setInterval(function () {
    if (ele.offsetTop == target) {
      clearInterval(ele.interId);
    } else {
      var dis11 = ele.offsetTop - 1;
      dis11 = dis11 < target ? target : dis11;
      ele.style.top = dis11 + "px";
    }
  }, 100);
}
// 当鼠标移动到ul上时，轮播停止
conter.onmouseover = function () {
  clearInterval(conter_auto.conterID);
}
conter.onmouseout = function () {
  conter_autoplay();
}
var item = document.getElementsByClassName('item');
var conter_auto2 = document.getElementsByClassName('conter-auto2')[0];
item[0].onmouseover = function () {
    conter_auto.style.display = 'block';
  conter_auto2.style.display = 'none';
}
item[1].onmouseover = function () {
    conter_auto2.style.display = 'block';
  conter_auto.style.display = 'none';
}
// 今日特价轮播图
function conter_autoplay2() {
  var con2 = 1;
  conter_auto2.conterID = setInterval(function () {
    if (con2 == conter_auto2.children.length - 1) {
      conter_auto2.style.top = 0;
      con2 = 1;
    }
    con2++;
    var flagcon2 = con2 * (-20);
    moveAnimationcon(conter_auto2, flagcon2);
  }, 500);
}
conter_autoplay2();
// 当鼠标移动到ul上时，轮播停止
conter.onmouseover = function () {
  clearInterval(conter_auto2.conterID);
}
conter.onmouseout = function () {
  conter_autoplay2();
}



// 我要加入右侧的轮播图
var join_ul = document.getElementsByClassName('join-ul')[0];
// 自动轮播
function joinAuto() {
  var joinIndex = 1;
  join_ul.joinID = setInterval(function () {
    if (joinIndex == join_ul.children.length - 1) {
      join_ul.style.top = 0;
      // 回滚0
      joinIndex = 1;
    }
    joinIndex++;
    var joinTarget = joinIndex * (-170);
    moveAnimation3(join_ul, joinTarget);
  }, 2000);
}
joinAuto();

function moveAnimation3(ele, target) {
  // 使用DOM元素,用定时的id值来添加DOM元素属性
  clearInterval(ele.interId);
  // 获取定时器的id
  ele.interId = setInterval(function () {
    if (ele.offsetTop == target) {
      clearInterval(ele.interId);
    }
    else {
      var slowStep = (target - ele.offsetTop) / 10;
      slowStep = slowStep > 0 ? Math.ceil(slowStep) : Math.floor(slowStep);
      ele.style.top = ele.offsetTop + slowStep + "px";
    }
  }, 50);
}
// 当鼠标放入轮播图中时，轮播图停止
join_ul.onmouseover = function () {
  clearInterval(join_ul.joinID);
}
join_ul.onmouseout = function () {
  joinAuto();
}

// IC现货供应
var conter_wrap_ul=document.getElementsByClassName('conter-wrap-ul')[0];
function wrapAuto(){
  var wrapIndex=1;
  conter_wrap_ul.interWrapID=setInterval(function(){
    if(wrapIndex==6){
      conter_wrap_ul.style.top=0;
      wrapIndex=1;
    }
    wrapIndex++;
    var wrapTarget=wrapIndex*(-32);
    moveAnimation3(conter_wrap_ul,wrapTarget);
  },2000);
}
wrapAuto();

// IC现货供应
var title_a=document.getElementsByClassName('title-a');
var conter_wrap_ul=document.getElementsByClassName('conter-wrap-ul')[0];
var conter_wrap_ul2=document.getElementsByClassName('conter-wrap-ul2')[0];
title_a[0].onmouseover=function(){
  title_a[0].style.borderTop='1px solid orange';
  title_a[1].style.borderTop='1px solid #fff';
  title_a[0].style.fontWeight='700';
  title_a[1].style.fontWeight='400';
  title_a[0].style.backgroundColor='#fff';
  title_a[1].style.backgroundColor='#ddd';
  conter_wrap_ul.style.display='block';
  conter_wrap_ul2.style.display='none';
}
title_a[1].onmouseover=function(){
  title_a[1].style.borderTop='1px solid orange';
  title_a[0].style.borderTop='1px solid #fff';
  title_a[1].style.fontWeight='700';
  title_a[0].style.fontWeight='400';
  title_a[1].style.backgroundColor='#fff';
  title_a[0].style.backgroundColor='#ddd';
  conter_wrap_ul2.style.display='block';
  conter_wrap_ul.style.display='none';
}

// 最新供应内容
var currentr_a=document.getElementsByClassName('currentr-a');
var current_new_item=document.querySelector('.current-new-item');
var current_new_item2=document.querySelector('.current-new-item2');
currentr_a[0].onmouseover=function(){
  currentr_a[0].style.borderTop='1px solid orange';
  currentr_a[1].style.borderTop='1px solid #fff';
  currentr_a[0].style.fontWeight='700';
  currentr_a[1].style.fontWeight='400';
  currentr_a[1].style.backgroundColor='#ddd';
  currentr_a[0].style.backgroundColor='#fff';
  current_new_item.style.display='block';
  current_new_item2.style.display='none';
}
currentr_a[1].onmouseover=function(){
  currentr_a[1].style.borderTop='1px solid orange';
  currentr_a[0].style.borderTop='1px solid #fff';
  currentr_a[1].style.fontWeight='700';
  currentr_a[0].style.fontWeight='400';
  currentr_a[0].style.backgroundColor='#ddd';
  currentr_a[1].style.backgroundColor='#fff';
  current_new_item2.style.display='block';
  current_new_item.style.display='none';
}
// vip金牌会员内容
var goldl_a=document.getElementsByClassName('goldl-a');
var gold_content=document.querySelector('.gold-content');
var gold_content2=document.querySelector('.gold-content2');
goldl_a[0].onmouseover=function(){
  goldl_a[0].style.borderTop='1px solid orange';
  goldl_a[1].style.borderTop='1px solid #fff';
  goldl_a[0].style.fontWeight='700';
  goldl_a[1].style.fontWeight='400';
  goldl_a[0].style.backgroundColor='#fff';
  goldl_a[1].style.backgroundColor='#ddd';
  gold_content.style.display='block';
  gold_content2.style.display='none';
}
goldl_a[1].onmouseover=function(){
  goldl_a[1].style.borderTop='1px solid orange';
  goldl_a[0].style.borderTop='1px solid #fff';
  goldl_a[1].style.fontWeight='700';
  goldl_a[0].style.fontWeight='400';
  goldl_a[0].style.backgroundColor='#ddd';
  goldl_a[1].style.backgroundColor='#fff';
  gold_content2.style.display='block';
  gold_content1.style.display='none';
}
// 会员专区右侧部分
var pro_vip_tit=document.getElementsByClassName('pro-vip-tit')[0];
console.log(pro_vip_tit.children);//[a,a]
var pro_vip_list=document.getElementsByClassName('pro-vip-list')[0];
console.log(pro_vip_list.children);//[li,li]
pro_vip_tit.children[0].onmouseover=function(){
  pro_vip_list.children[0].style.display='block';
  pro_vip_list.children[1].style.display='none';
  pro_vip_tit.children[0].style.backgroundColor='#fff';
  pro_vip_tit.children[0].style.fontWeight='700';
  pro_vip_tit.children[0].style.borderTop='1px solid orange';
  pro_vip_tit.children[1].style.backgroundColor='#ddd';
  pro_vip_tit.children[1].style.fontWeight='400';
  pro_vip_tit.children[1].style.borderTop='1px solid #fff';
}
pro_vip_tit.children[1].onmouseover=function(){
  pro_vip_list.children[1].style.display='block';
  pro_vip_list.children[0].style.display='none';
  pro_vip_tit.children[1].style.backgroundColor='#fff';
  pro_vip_tit.children[1].style.fontWeight='700';
  pro_vip_tit.children[1].style.borderTop='1px solid orange';
  pro_vip_tit.children[0].style.backgroundColor='#ddd';
  pro_vip_tit.children[0].style.fontWeight='400';
  pro_vip_tit.children[0].style.borderTop='1px solid #fff';
}

// 展会协同商
var exhibition_a=document.getElementsByClassName('exhibition-a');
var exhibition_content=document.querySelector('.exhibition-content');
var exhibition_content2=document.querySelector('.exhibition-content2');
var exhibition_content3=document.querySelector('.exhibition-content3');
exhibition_a[0].onmouseover=function(){
  exhibition_a[0].style.backgroundColor='#fff';
  exhibition_a[0].style.fontWeight='700';
  exhibition_a[0].style.borderTop='1px solid orange';
  exhibition_a[1].style.backgroundColor='#ddd';
  exhibition_a[1].style.fontWeight='400';
  exhibition_a[1].style.borderTop='1px solid #fff';
  exhibition_a[2].style.backgroundColor='#ddd';
  exhibition_a[2].style.fontWeight='400';
  exhibition_a[2].style.borderTop='1px solid #fff';
  exhibition_content.style.display='block';
  exhibition_content2.style.display='none';
  exhibition_content3.style.display='none';
}
exhibition_a[1].onmouseover=function(){
  exhibition_a[1].style.backgroundColor='#fff';
  exhibition_a[1].style.fontWeight='700';
  exhibition_a[1].style.borderTop='1px solid orange';
  exhibition_a[0].style.backgroundColor='#ddd';
  exhibition_a[0].style.fontWeight='400';
  exhibition_a[0].style.borderTop='1px solid #fff';
  exhibition_a[2].style.backgroundColor='#ddd';
  exhibition_a[2].style.fontWeight='400';
  exhibition_a[2].style.borderTop='1px solid #fff';
  exhibition_content.style.display='none';
  exhibition_content2.style.display='block';
  exhibition_content3.style.display='none';
}
exhibition_a[2].onmouseover=function(){
  exhibition_a[2].style.backgroundColor='#fff';
  exhibition_a[2].style.fontWeight='700';
  exhibition_a[2].style.borderTop='1px solid orange';
  exhibition_a[0].style.backgroundColor='#ddd';
  exhibition_a[0].style.fontWeight='400';
  exhibition_a[0].style.borderTop='1px solid #fff';
  exhibition_a[1].style.backgroundColor='#ddd';
  exhibition_a[1].style.fontWeight='400';
  exhibition_a[1].style.borderTop='1px solid #fff';
  exhibition_content.style.display='none';
  exhibition_content2.style.display='none';
  exhibition_content3.style.display='block';
}
var img_a=document.getElementsByClassName('img-a')[0];
var gray_box=document.getElementsByClassName('gray-box')[0];

 img_a.onmouseover=function(){
  gray_box.style.top='0';
} 
img_a.onmouseout=function(){
  gray_box.style.top='-60px';
} 
