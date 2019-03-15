var element = document.getElementById('top');

if (typeof(element) != 'undefined' && element != null)
{
  element.setAttribute('href', 'test');
  element.onclick = function() {
    window.history.back();
  }
}

