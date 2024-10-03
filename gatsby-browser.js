exports.onInitialClientRender = () => {
  window.scrollTo(0, 0);
  addSmoothScrollForSamePageLinks();
};

exports.onRouteUpdate = ({ location }) => {
  if (location.hash) {
    setTimeout(() => scrollToAnchor(location), 500);
  } else {
    window.scrollTo(0, 0);
  }
  
  // Reattach the smooth scroll event listener after each route update
  addSmoothScrollForSamePageLinks();
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
      window.scrollTo({
        top: itemOffsetTop - mainNavHeight,
        behavior: "smooth",
      });
    }
  }
}

/**
 * @desc - Adds smooth scroll behavior for same-page anchor links.
 */
function addSmoothScrollForSamePageLinks() {
  document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const url = new URL(this.href);

      if (url.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(url.hash);
        if (targetElement) {
          const itemOffsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: itemOffsetTop,
            behavior: 'smooth',
          });
        }
      }
    });
  });
}
