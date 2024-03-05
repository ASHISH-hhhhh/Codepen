function run() {
  let htmlCode = document.getElementById("html-code");
  let cssCode = document.getElementById("css-code");
  //   let javascriptCode = document.getElementById("javascript-code");
  let output = document.getElementById("output");
  output.contentDocument.body.innerHTML =
    htmlCode.value + "<style>" + cssCode.value + "</style>";
}
