function callback() {
  let elem = document.getElementById("api-list");
  let el_height;
  let coords = elem.getBoundingClientRect();

  let screen_width = document.documentElement.clientWidth;
  let screen_height = document.documentElement.clientHeight;
  
  if (screen_width>960 && window.pageYOffset + screen_height > elem.clientHeight ) {
    elem.style.position = "fixed";
    elem.style.top = Math.min(window.pageYOffset, el_height) + "px";
  }
  else {
    elem.style.position = "unset";
  }
}
window.addEventListener("scroll", callback);
