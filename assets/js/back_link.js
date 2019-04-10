(function(document) {
var domain_name = 'openocl';
var element = document.getElementById('top');
var last_page = document.referrer;
if (element !== null && window.history.length > 0 && last_page.toLowerCase().indexOf(domain_name) !== -1)  
{
  element.setAttribute('href', 'back');
  element.onclick = function() {
    window.history.back();
    return false;
  }
}
  
function scrollTop() {
  window.scrollTo(100, 0);
}

let top_scroll = document.getElementById("scroll-top-click");

top_scroll.addEventListener("click", scrollTop);
top_scroll.href = ""
  
})(document);
