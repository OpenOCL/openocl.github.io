(function(document) {
var domain_name = 'openocl';
var element = document.getElementById('top');
var last_page = document.referrer;
if (element !== null && window.history.length > 0 && last_page.includes(domain_name))  
{
  element.setAttribute('href', 'back');
  element.onclick = function() {
    window.history.back();
    return false;
  }
}
})(document);
