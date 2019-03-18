function callback() {
  let elem = document.getElementById("api-list");
  let el_height = elem.clientHeight;
  let coords = elem.getBoundingClientRect();

  let screen_width = document.documentElement.clientWidth;
  let screen_height = document.documentElement.clientHeight;
  
  if (screen_width>960 ) {
    elem.style.position = "fixed";
    if (window.pageYOffset < el_height+150 - screen_height) {
      elem.style.top =  150-window.pageYOffset + "px";
    }
    else {
      elem.style.top =  screen_height - el_height -20  + "px";
    }
    
  }
  else {
    elem.style.position = "unset";
  }
}
window.addEventListener("scroll", callback);

let top_scroll = document.getElementById("top");
top_scroll.onclick = function(){
  window.scrollTo(0, 0);
};

