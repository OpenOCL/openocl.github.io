var element = document.getElementById('top');

if (typeof(element) != 'undefined' && element != null)
{
  element.setAttribute('href', document.referrer);
  element.onclick = function() {
    history.back();
  }
}

