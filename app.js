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

  // 嘗試 iframe
  iframe.src = url;
  lockGoogle();

  // 5 秒後如果 iframe 失敗 → 新分頁打開
  setTimeout(() => {
    try {
      if (!iframe.contentWindow || iframe.contentWindow.length === 0) {
        window.open(url, "_blank");
      }
    } catch {
      window.open(url, "_blank");
    }
  }, 5000);
}

iframe.src = "https://www.google.com";
lockGoogle();
