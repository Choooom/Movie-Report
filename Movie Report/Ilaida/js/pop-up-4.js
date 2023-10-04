var button4Themes = document.getElementById("button-4");
var technicalModal = document.getElementById("technical-aspect-modal");
var closeBtn4 = document.getElementsByClassName("close4")[0];

button4Themes.addEventListener("click", function() {
  technicalModal.style.display = "block";
  document.body.style.overflowY = "hidden"; // Disable body scrolling
  setTimeout(function() {
    technicalModal.classList.add("modal-open");
  }, 0);
});

window.addEventListener("click", function(event) {
  if (event.target == technicalModal) {
    technicalModal.classList.remove("modal-open");
    setTimeout(function() {
      technicalModal.style.display = "none";
      document.body.style.overflowY = "auto"; // Enable body scrolling
    }, 300);
  }
});

closeBtn4.addEventListener("click", function() {
  technicalModal.classList.remove("modal-open");
  setTimeout(function() {
    technicalModal.style.display = "none";
    document.body.style.overflowY = "auto"; // Enable body scrolling
  }, 300);
});