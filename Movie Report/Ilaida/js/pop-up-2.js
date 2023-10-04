var button2Themes = document.getElementById("button-2");
var messagesModal = document.getElementById("messages-modal");
var closeBtn2 = document.getElementsByClassName("close2")[0];

button2Themes.addEventListener("click", function() {
  messagesModal.style.display = "block";
  document.body.style.overflowY = "hidden"; // Disable body scrolling
  setTimeout(function() {
    messagesModal.classList.add("modal-open");
  }, 0);
});

window.addEventListener("click", function(event) {
  if (event.target == messagesModal) {
    messagesModal.classList.remove("modal-open");
    setTimeout(function() {
      messagesModal.style.display = "none";
      document.body.style.overflowY = "auto"; // Enable body scrolling
    }, 300);
  }
});

closeBtn2.addEventListener("click", function() {
  messagesModal.classList.remove("modal-open");
  setTimeout(function() {
    messagesModal.style.display = "none";
    document.body.style.overflowY = "auto"; // Enable body scrolling
  }, 300);
});