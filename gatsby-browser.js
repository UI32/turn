exports.onInitialClientRender = () => {
  // Ensure the page always starts at the top on initial load
  window.scrollTo(0, 0);
};

exports.onRouteUpdate = ({ location }) => {
  // Ensure that no scroll happens and the page stays at the top on route changes without hash
  if (location.hash) {
    // If navigating to a hash, smoothly scroll to the anchor
    setTimeout(() => scrollToAnchor(location), 500);
  } else {
    // Force scroll to the top without any smooth behavior
    window.scrollTo(0, 0);
  }
};

/**
 * @desc - A function to jump to the correct scroll position for anchor links
 * @param {Object} location - The location object containing the hash
 * @param {Number} [mainNavHeight] - Optional height of persistent nav if needed
 */
function scrollToAnchor(location, mainNavHeight = 0) {
  if (location && location.hash) {
    const targetElement = document.querySelector(`${location.hash}`);
    if (targetElement) {
      const itemOffsetTop = targetElement.offsetTop;

      // Smooth scroll to the element
      window.scrollTo({
        top: itemOffsetTop - mainNavHeight,
        behavior: "smooth", // Smooth scrolling to the anchor
      });
    }
  }
}
