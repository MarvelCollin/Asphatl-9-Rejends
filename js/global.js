function extend(path, targetId, page) {
  fetch(path)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(targetId).innerHTML = html;
      document.getElementById(page).classList.add("active");
    });
}
