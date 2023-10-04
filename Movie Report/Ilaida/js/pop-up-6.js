var button6Themes = document.getElementById("button-6");
var conclusionModal = document.getElementById("conclusion-modal");
var closeBtn6 = document.getElementsByClassName("close6")[0];
var videoElement = document.querySelector("#conclusion-modal video");

button6Themes.addEventListener("click", function() {
  conclusionModal.style.display = "block";
  document.body.style.overflowY = "hidden"; // Disable body scrolling
  setTimeout(function() {
    conclusionModal.classList.add("modal-open");
  }, 0);
});

window.addEventListener("click", function(event) {
  if (event.target == conclusionModal) {
    conclusionModal.classList.remove("modal-open");
    setTimeout(function() {
      conclusionModal.style.display = "none";
      document.body.style.overflowY = "auto"; // Enable body scrolling
      pauseVideo();
    }, 300);
  }
});

closeBtn6.addEventListener("click", function() {
  conclusionModal.classList.remove("modal-open");
  setTimeout(function() {
    conclusionModal.style.display = "none";
    document.body.style.overflowY = "auto"; // Enable body scrolling
    pauseVideo();
  }, 300);
});

window.addEventListener("beforeunload", function() {
  pauseVideo();
});

function pauseVideo() {
  if (!videoElement.paused) {
    videoElement.pause();
  }
}
