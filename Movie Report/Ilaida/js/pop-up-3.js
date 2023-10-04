var button3Themes = document.getElementById("button-3");
var evaluationModal = document.getElementById("overall-evaluation-modal");
var closeBtn3 = document.getElementsByClassName("close3")[0];

button3Themes.addEventListener("click", function() {
  evaluationModal.style.display = "block";
  document.body.style.overflowY = "hidden"; // Disable body scrolling
  setTimeout(function() {
    evaluationModal.classList.add("modal-open");
  }, 0);
});

window.addEventListener("click", function(event) {
  if (event.target == evaluationModal) {
    evaluationModal.classList.remove("modal-open");
    setTimeout(function() {
      evaluationModal.style.display = "none";
      document.body.style.overflowY = "auto"; // Enable body scrolling
    }, 300);
  }
});

closeBtn3.addEventListener("click", function() {
  evaluationModal.classList.remove("modal-open");
  setTimeout(function() {
    evaluationModal.style.display = "none";
    document.body.style.overflowY = "auto"; // Enable body scrolling
  }, 300);
});