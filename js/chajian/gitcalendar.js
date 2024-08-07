function GitCalendarInit(t,n,e){if(document.getElementById("git_container")){var i=(t,n)=>{if("string"==typeof n){var e=document.createElement("div");e.innerHTML=n;for(var i=document.createDocumentFragment();e.firstChild;)i.appendChild(e.firstChild);t.appendChild(i)}else t.appendChild(n)},a=document.getElementById("git_container");document.getElementById("git_loading"),((t,n,e)=>{var l=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],o=[],d="",s="",c="",r="",g=0,u=0,v=[],m=[],p=[],h=[],f=0,y=0,b=[],x=[],w=[],$=0,_=()=>{if(document.getElementById("gitcanvas")){var t=document.getElementById("git_tooltip_container"),n=window.devicePixelRatio||1,a="",l="",d="",s="",c=document.getElementById("gitcanvas");c.style.width="100%",c.style.height="",document.getElementById("gitmessage");var r=c.getContext("2d");width=c.width=document.getElementById("gitcalendarcanvasbox").offsetWidth,height=c.height=8.64*c.width/git_data.length,((t,n,e)=>{if(e>1){var i=t.width,a=t.height;t.width=i*e,t.height=a*e,t.style.width="100%",t.style.height=a+"px",n.scale(e,e)}})(c,r,n);var g=height/9,u=.8*g,m={x:.02*width,y:.025*width};for(var p in git_data){for(var h in weekdata=git_data[p],weekdata){var f={date:"",count:"",x:0,y:0};v.push(f),r.fillStyle=B(e,weekdata[h].count),m.y=Math.round(100*m.y)/100,f.date=weekdata[h].date,f.count=weekdata[h].count,f.x=m.x,f.y=m.y,r.fillRect(m.x,m.y,u,u),m.y=m.y+g}m.y=.025*width,m.x=m.x+g}if(document.body.clientWidth>700){r.font="600  Arial",r.fillStyle="#aaa",r.fillText("日",0,1.9*g),r.fillText("二",0,3.9*g),r.fillText("四",0,5.9*g),r.fillText("六",0,7.9*g);var y=c.width/24;for(var b in o)r.fillText(o[b],y,.7*g),y+=c.width/12}c.onmousemove=function(n){document.querySelector(".gitmessage")&&(t.innerHTML=""),x(c,n)},t.onmousemove=function(n){document.querySelector(".gitmessage")&&(t.innerHTML="")};var x=(n,e)=>{var o=n.getBoundingClientRect(),c=e.clientX-o.left*(n.width/o.width),r=e.clientY-o.top*(n.height/o.height);for(var g of v){var m=c-g.x,p=r-g.y;0<m&&m<u&&0<p&&p<u&&(d=g.date,s=g.count,a=e.clientX-100,l=e.clientY-60,html=E(a,l,d,s),i(t,html))}}}},k=t=>{for(var n of git_data[t])f+=n.count},I=()=>{for(var t of p)g+=t.count};fetch(n).then((t=>t.json())).then((n=>{document.getElementById("git_loading")&&document.getElementById("git_loading").remove(),git_data=n.contributions,u=n.total,x=git_data[48],b=git_data[47],m=n.contributions[0],p=n.contributions[52],h=n.contributions[51],y=p.length-1,s=p[y].date,d=m[0].date,$=1*s.substring(5,7),w=l.splice($,12-$),o=w.concat(l),(t=>{6===y?(r=p[0].date,I()):(lastweek=t.contributions[51],r=lastweek[y+1].date,I(),(()=>{for(var t=y;t<h.length;t++)g+=h[t].count})())})(n),0===y?(k(52),k(51),k(50),k(49),k(48),f+=b[6].count,c=b[6].date):(k(52),k(51),k(50),k(49),(()=>{for(var t=y-1;t<x.length;t++)f+=x[t].count})(),c=x[y-1].date);var v=T(o,git_data,t,e,u,f,g,d,s,r,c);i(a,v),_()})).catch((function(t){console.log(t)})),window.onresize=function(){_()},window.onscroll=function(){document.querySelector(".gitmessage")&&(git_tooltip_container.innerHTML="")};var B=(t,n)=>0===n?(parseInt(n/2),t[0]):n<2?t[1]:n<20?t[parseInt(n/2)]:t[9],E=(t,n,e,i)=>`<div class="gitmessage" style="top:${n}px;left: ${t}px;position: fixed;z-index:9999">\n                          <div class="angle-wrapper" style="display:block;">\n                            <span>${e}&nbsp;</span>\n                            <span>${i}次上传</span>\n                          </div>\n                        </div>`,T=(t,n,e,i,a,l,o,d,s,c,r)=>{var g="",u=((t,n)=>`<div id="git_tooltip_container"></div>\n                        <div class="contrib-footer clearfix mt-1 mx-3 px-3 pb-1">\n                          <div class="float-left text-gray">数据来源\n                            <a href="https://github.com/${t}" target="blank">@${t}</a>\n                          </div>\n                          <div class="contrib-legend text-gray">Less\n                            <ul class="legend">\n                            <li style="background-color:${n[0]}"></li>\n                            <li style="background-color:${n[2]}"></li>\n                            <li style="background-color:${n[4]}"></li>\n                            <li style="background-color:${n[6]}"></li>\n                            <li style="background-color:${n[8]}"></li>\n                            </ul>More\n                          </div>\n                        </div>`)(e,i);return(g+=`<div class="position-relative">\n                          <div class="border py-2 graph-before-activity-overview">\n                            <div class="js-gitcalendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas gitcalendar-graph height-full text-center">\n                              <div id="gitcalendarcanvasbox">\n                              <canvas id="gitcanvas" style="animation: none;">\n                              </canvas>\n                            </div>\n                            </div>\n                            ${u}\n                          </div>\n                        </div>`)+`<div style="display:flex;width:100%">\n                          <div class="contrib-column contrib-column-first table-column">\n                            <span class="text-muted">过去一年提交</span>\n                            <span class="contrib-number">${a}</span>\n                            <span class="text-muted">${d}&nbsp;-&nbsp;${s}</span>\n                          </div>\n                          <div class="contrib-column table-column">\n                            <span class="text-muted">最近一月提交</span>\n                            <span class="contrib-number">${l}</span>\n                            <span class="text-muted">${r}&nbsp;-&nbsp;${s}</span>\n                          </div>\n                          <div class="contrib-column table-column">\n                            <span class="text-muted">最近一周提交</span>\n                            <span class="contrib-number">${o}</span>\n                            <span class="text-muted">${c}&nbsp;-&nbsp;${s}</span>\n                          </div>\n                        </div>`}})(e,t,n)}}