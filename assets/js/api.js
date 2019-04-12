(function(document) {
  
function scrollTop() {
  window.scrollTo(100, 0);
}

let top_scroll = document.getElementById("scroll-top-click");

top_scroll.addEventListener("click", scrollTop);
top_scroll.href = ""

})(document);
