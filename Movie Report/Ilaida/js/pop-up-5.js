var button5Themes = document.getElementById("button-5");
var actingModal = document.getElementById("acting-modal");
var closeBtn5 = document.getElementsByClassName("close5")[0];

button5Themes.addEventListener("click", function() {
  actingModal.style.display = "block";
  document.body.style.overflowY = "hidden"; // Disable body scrolling
  setTimeout(function() {
    actingModal.classList.add("modal-open");
  }, 0);
});

window.addEventListener("click", function(event) {
  if (event.target == actingModal) {
    actingModal.classList.remove("modal-open");
    setTimeout(function() {
      actingModal.style.display = "none";
      document.body.style.overflowY = "auto"; // Enable body scrolling
    }, 300);
  }
});

closeBtn5.addEventListener("click", function() {
  actingModal.classList.remove("modal-open");
  setTimeout(function() {
    actingModal.style.display = "none";
    document.body.style.overflowY = "auto"; // Enable body scrolling
  }, 300);
});