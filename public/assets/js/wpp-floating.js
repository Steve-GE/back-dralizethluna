$(document).ready(function(){

    $('.btn-whatsapp-chat').click(function(){
      $('.box-whatsapp-chat').toggleClass('open');
      $(this).toggleClass('openbtn');
    });
   
 });
 
 
 
 function isMobileWA() {
       return /Android|webOS|iPhone|iPad|iPod|Windows Phone|IEMobile|Mobile|BlackBerry/i.test(navigator.userAgent);
     }
     var elm = jQuery('a[href*="whatsapp.com"]');
     jQuery.each(elm, function (index, value) {
       var item = jQuery(value).attr("href");
       if (item.indexOf("chat") != -1) {
         //nothing
       } else if (item.indexOf("web.whatsapp") != -1 && isMobileWA()) {
         var itemLink = item;
         var newLink = itemLink.replace("web.whatsapp", "api.whatsapp");
         jQuery(value).attr("href", newLink);
       } else if (item.indexOf("api.whatsapp") != -1 && !isMobileWA()) {
         var itemLink = item;
         var newLink = itemLink.replace("api.whatsapp", "web.whatsapp");
         jQuery(value).attr("href", newLink);
       }
     });