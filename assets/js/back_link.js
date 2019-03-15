(function(document) {
var element = document.getElementById('top');
last = document.referrer;
if (element !== null && window.history.length > 0 && last.includes("openocl"))  
{
  element.setAttribute('href', 'back');
  element.onclick = function() {
    window.history.back();
    return false;
  }
}
})(document);
