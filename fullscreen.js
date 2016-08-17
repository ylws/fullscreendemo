/*
 * 名称：全屏事件
 * 作者：djl
 * 邮箱：474569696@qq.com
 * 日期：2016/8/17
 */
//全屏方法调用
function FullScreen(element){
	 if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    } else if (element.msRequestFullScreen) {
        element.msRequestFullScreen();
    } else {
        return true;
    }
};
//取消全屏方法调用
function CancelFullScreen(){
	if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else {
        return true;
    }
};
//init status and vals
var screenwid=screen.width,screenhei=screen.height;
var docwid=document.documentElement.clientWidth;
var dochei=document.documentElement.clientHeight;
var parentobj=document.getElementsByClassName("playpart")[0];//get elements which can be fullscreen
if(screenwid==docwid&&screenhei==dochei&&parseInt(getStyle(parentobj,"width"))==screenwid)
{
	//btn status set(fullscreen)
	parentobj.parentNode.getElementsByClassName("fullscreen")[0].setAttribute("fs","true");
}
else
{
	//btn status set(out full screen)
	parentobj.parentNode.getElementsByClassName("fullscreen")[0].setAttribute("fs","false");
}
//esc取消全屏方法调用
function escFullScreen() {
    if (!document.fullscreenElement &&!document.mozFullScreenElement &&!document.webkitFullscreenElement &&!document.msFullscreenElement) 
    {
    	//esc out of fullscreen deals
    }
}
//listen esc event out of fullscreen
document.addEventListener && (document.addEventListener('webkitfullscreenchange', escFullScreen, false) ||
document.addEventListener('mozfullscreenchange', escFullScreen, false) ||
document.addEventListener('fullscreenchange', escFullScreen, false) ||
document.addEventListener('webkitfullscreenchange', escFullScreen, false));
document.attachEvent && document.attachEvent('msfullscreenchange', escFullScreen);

//点击事件
parentobj.parentNode.getElementsByClassName("fullscreen")[0].onclick=function(){
	var flag=this.getAttribute("fs");
	if(flag=="false")
	{
		window.FullScreen(parentobj);//fullscreen call
	    this.setAttribute("fs","true");//btn status set
	    
	}
	else
	{
		window.CancelFullScreen();//out fullscreen call
		this.setAttribute("fs","false");//btn status set
	}
}
//resize事件
window.onresize=function(){
	//判断当前状态是否全屏 f11
	var screenwid=screen.width,screenhei=screen.height;
	var docwid=document.documentElement.clientWidth;
	var dochei=document.documentElement.clientHeight;
	if(screenwid==docwid&&screenhei==dochei&&parseInt(getStyle(parentobj,"width"))==screenwid){}
	else
	{
	    parentobj.parentNode.getElementsByClassName("fullscreen")[0].setAttribute("fs","false");//btn status set
	    
	}
}
//doms
//<div class="father"><div class="playpart"></div></div>
//btn   <div class="fullscreen"></div>
