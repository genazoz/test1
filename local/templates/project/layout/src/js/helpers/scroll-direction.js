let lastScrollTop = 0;
let scrollDirection = 0;
const getScrollDirection = () => scrollDirection;
const $window = window;
window.scrollDirection = null;

// Направление скролла
// -1: вверх
// 1: вниз
// Направление скролла

const checkScrollDirection = () => {
  const windowScrollTop = $window.pageYOffset;

  if (windowScrollTop > lastScrollTop) {
    lastScrollTop = $window.pageYOffset;
    window.scrollDirection = 'down';
    return 'down';
  } else if (windowScrollTop < lastScrollTop) {
    lastScrollTop = $window.pageYOffset;
    window.scrollDirection = 'up';
    return 'up';
  }
};

$window.addEventListener('scroll', checkScrollDirection);

export { getScrollDirection };
export { checkScrollDirection };
