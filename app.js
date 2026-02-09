const iframe = document.getElementById("view");
const input = document.getElementById("url");

function lockGoogle() {
  document.title = "Google";
  document.getElementById("favicon").href =
    "https://www.google.com/favicon.ico";
}

setInterval(lockGoogle, 500);

function go() {
  let url = input.value.trim();
  if (!url) return;

  if (!url.startsWith("http")) {
    if (url.includes(".")) {
      url = "https://" + url;
    } else {
      url = "https://www.google.com/search?q=" + encodeURIComponent(url);
    }
  }

  iframe.src = url;
  lockGoogle();
}

iframe.src = "https://www.google.com";
lockGoogle();
