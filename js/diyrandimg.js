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
    "url(https://z4a.net/images/2022/04/19/IMG_20220307_190940.jpg)",
    "url(https://z4a.net/images/2022/04/19/IMG_20220309_185813.jpg)",
    "url(https://z4a.net/images/2022/04/19/IMG_20220310_103158.jpg)",
    "url(https://z4a.net/images/2022/04/19/IMG_20220226_131802.jpg)",
    "url(https://z4a.net/images/2022/04/19/IMG_20220310_103231.jpg)",
    "url(https://z4a.net/images/2022/04/19/IMG_20220308_142522.jpg)",
    "url(https://z4a.net/images/2022/04/19/IMG_20220308_142505.jpg)"
  ];
  //本站源
  // var bannerimg =[
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220108_180309.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220112_173310.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220112_173514.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220118_134344.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220226_131802.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220308_142505.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220309_185813.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220308_142505.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220310_103203.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220310_103210.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220310_103220.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220310_103231.jpg)",
  //   "url(https://e5-oneindex.vercel.app/api/raw/?path=/picbed/IMG_20220307_190940.jpg)"
    
    
    
  // ];
  
  //获取banner图片总数，生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  var bgid = document.getElementById("page-header");
  if(bgid.className =="full_page")                                //精确到class重要插桩
  {document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];}
  //重设banner图片
//   document.getElementById("page-header").class.full_page.style.backgroundImage = bannerimg[bannerindex];
//   document.getElementsByClassName("full_page").style.backgroundImage = bannerimg[bannerindex];