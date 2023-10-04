document.addEventListener("DOMContentLoaded", function() {
    var scrollContainer = document.getElementById("overall-evaluation-modal");
    
    scrollContainer.addEventListener("wheel", function(event) {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
    });
  });