function showText(dest){
	navText = document.getElementById(dest);
	navText.style.opacity = 1;
}
function navigateTo(dest){
	window.location.href=dest;
}
function hideText(dest, item){
	clearTimeout(item);
	navText = document.getElementById(dest);
	navText.style.opacity = 0;
}
var navItemShow0,navItemShow1,navItemShow2;
function setSidebar(){
	var navi=document.getElementById("sidebar");
	if(navi.style.width == "12.5em"){
		hideText("nav-menu-item-0", navItemShow0);
		hideText("nav-menu-item-1", navItemShow1);
		hideText("nav-menu-item-2", navItemShow2);
		navi.style.width= "2.5em";
	}else{
		navi.style.width= "12.5em";
		navItemShow0 = setTimeout(showText,250,"nav-menu-item-0");
		navItemShow1 = setTimeout(showText,500,"nav-menu-item-1");
		navItemShow2 = setTimeout(showText,600,"nav-menu-item-2");
	}
}