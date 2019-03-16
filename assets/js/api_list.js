
function callback() {
  let elem = document.getElementById("api-list");
  let coords = elem.getBoundingClientRect();
  let api_doc_y = coords.bottom+window.pageYOffset;
  if (api_doc_y < document.documentElement.clientHeight) {
    elem.style.position = "absolute";
    elem.style.bottom = "20px";
  } else {
    elem.style.position = "relative";
  }
}

window.addEventListener("scroll", callback);
