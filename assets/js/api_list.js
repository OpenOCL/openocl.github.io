function callback() {
  let elem = document.getElementById("api-list");
  let coords = elem.getBoundingClientRect();
  let screen_width = document.documentElement.clientWidth;
  if (coords.top+window.pageYOffset < 100) {
    elem.style.position = "relative";
  } else if (screen_width>960 && coords.bottom<document.documentElement.clientHeight-20) {
    elem.style.position = "fixed";
    elem.style.bottom = "20px";
  }
}
window.addEventListener("scroll", callback);
