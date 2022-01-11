// //随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var backimg =[
//     "url(/img/bg1.JPG)",
//     "url(/img/bg2.jpg)",
//     "url(/img/bg3.jpg)",
//     "url(/img/bg4.jpg)"
//   ];
//   //获取背景图片总数，生成随机数
//   var bgindex =Math.floor(Math.random() * backimg.length);
//   //重设背景图片
//   document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg)",
    "url(https://picsum.photos/id/767/3069/2048)",
    "url(https://picsum.photos/id/800/4663/3109)",
    "url(https://picsum.photos/id/459/2310/1534)",
    "url(https://picsum.photos/id/458/5184/3456)",
    "url(https://picsum.photos/id/317/1935/1089)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  var bgid = document.getElementById("page-header");
  if(bgid.className =="full_page")                                //精确到class重要插桩
  {document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];}
  //重设banner图片
//   document.getElementById("page-header").class.full_page.style.backgroundImage = bannerimg[bannerindex];
//   document.getElementsByClassName("full_page").style.backgroundImage = bannerimg[bannerindex];