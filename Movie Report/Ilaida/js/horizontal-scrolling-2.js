document.addEventListener("DOMContentLoaded", function() {
    var scrollContainer = document.getElementById("messages-modal");
    
    scrollContainer.addEventListener("wheel", function(event) {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
    });
  });