var scroll_pos = 0;

function callback() {
  let elem = document.getElementById("api-list");
  let coords = elem.getBoundingClientRect();
  let api_doc_y = coords.bottom;
  if ((document.body.getBoundingClientRect()).top > scroll_pos)
    elem.style.position = "relative";
  else if (api_doc_y < document.documentElement.clientHeight) {
    elem.style.position = "absolute";
    elem.style.bottom = "20px";
  }
  scroll_pos = (document.body.getBoundingClientRect()).top;
}

window.addEventListener("scroll", callback);
