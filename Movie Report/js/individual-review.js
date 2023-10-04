// Get all the content divs
var contentDivs = document.querySelectorAll('.content');
    
// Add event listeners to each content div
contentDivs.forEach(function(contentDiv) {
  contentDiv.addEventListener('mouseover', function() {
    // Apply the styles to the other content divs
    contentDivs.forEach(function(otherDiv) {
      if (otherDiv !== contentDiv) {
        otherDiv.style.filter = 'blur(1px)';
        otherDiv.style.boxShadow = '1px 1px 0 #22ffb8';
      }
    });
  });

  contentDiv.addEventListener('mouseout', function() {
    // Remove the styles from the other content divs
    contentDivs.forEach(function(otherDiv) {
      if (otherDiv !== contentDiv) {
        otherDiv.style.filter = '';
        otherDiv.style.boxShadow = '';
      }
    });
  });
});