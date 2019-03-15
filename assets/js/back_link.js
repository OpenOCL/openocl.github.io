(function(document) {
var element = document.getElementById('top');

if (typeof(element) != 'undefined' && element != null && window.history.length > 0)  
{
  element.setAttribute('href', 'back');
  element.onclick = function() {
    window.history.back();
    return false;
  }
}
})(document);
