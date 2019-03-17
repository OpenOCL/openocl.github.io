function callback() {
  if (document.documentElement.clientHeight < 960) {
    return;
  }
  let elem = document.getElementById("api-list");
  let coords = elem.getBoundingClientRect();
  if (coords.top+window.pageYOffset < 50) {
    elem.style.position = "relative";
  } else if (coords.bottom < document.documentElement.clientHeight-20) {
    elem.style.position = "fixed";
    elem.style.bottom = "20px";
  }
}

window.addEventListener("scroll", callback);
