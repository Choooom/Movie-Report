document.addEventListener("DOMContentLoaded", function() {
    var scrollContainer = document.getElementById("conclusion-modal");
    
    scrollContainer.addEventListener("wheel", function(event) {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
    });
  });