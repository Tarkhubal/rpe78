const loader = document.querySelector(".loader");
window.onload = function () {
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 100);
  }, 500);
};
