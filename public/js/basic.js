/* 서브 메뉴 롤오버
---------------------------------------------------------*/
function left_action(depth1){
	$("#sub_select li:eq("+(depth1-1)+") a").addClass('on');
	$(".sub_swiper div:eq("+(depth1-1)+") a").addClass('on');
}

/* 즐겨찾기 */

function bookmark_site(title,url) { 
   // Internet Explorer
   if(document.all)
   {
       window.external.AddFavorite(url, title); 
   }
   // Google Chrome
   else if(window.chrome){
      alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
   }
   // Firefox
   else if (window.sidebar) // firefox 
   {
       window.sidebar.addPanel(title, url, ""); 
   }
   // Opera
   else if(window.opera && window.print)
   { // opera 
      var elem = document.createElement('a'); 
      elem.setAttribute('href',url); 
      elem.setAttribute('title',title); 
      elem.setAttribute('rel','sidebar'); 
      elem.click(); 
   }
} 
