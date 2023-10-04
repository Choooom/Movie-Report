var button1Themes = document.getElementById("button-1");
var themesModal = document.getElementById("themes-modal");
var closeBtn1 = document.getElementsByClassName("close1")[0];

button1Themes.addEventListener("click", function() {
  themesModal.style.display = "block";
  document.body.style.overflowY = "hidden"; // Disable body scrolling
  setTimeout(function() {
    themesModal.classList.add("modal-open");
  }, 0);
});

window.addEventListener("click", function(event) {
  if (event.target == themesModal) {
    themesModal.classList.remove("modal-open");
    setTimeout(function() {
      themesModal.style.display = "none";
      document.body.style.overflowY = "auto"; // Enable body scrolling
    }, 300);
  }
});

closeBtn1.addEventListener("click", function() {
  themesModal.classList.remove("modal-open");
  setTimeout(function() {
    themesModal.style.display = "none";
    document.body.style.overflowY = "auto"; // Enable body scrolling
  }, 300);
});