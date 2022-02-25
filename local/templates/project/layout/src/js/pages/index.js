import '~/js/common';
import Garden from '../init/garden'

const backgroundDOM = [...document.querySelectorAll('.s-garden__background')],
  gardenButtonDOM = $.qs('.s-garden__button'),
  gardenAgeDOM = $.qs('.garden-age'),
  treesCountDOM = $.qs('.trees-count'),
  applesCountDOM = $.qs('.apples-count'),
  fallenApplesDOM = $.qs('.fallen-apples'),
  spoiledApplesDOM = $.qs('.spoiled-apples');

function updateInfos() {
  if (gardenAgeDOM)
    gardenAgeDOM.innerHTML = garden.getAge();
  if (treesCountDOM)
    treesCountDOM.innerHTML = garden.getTreesCount();
  if (applesCountDOM)
    applesCountDOM.innerHTML = garden.getApplesCount();
  if (fallenApplesDOM)
    fallenApplesDOM.innerHTML = garden.getFallenApplesCount();
  if (spoiledApplesDOM)
    spoiledApplesDOM.innerHTML = garden.getSpoiledApplesCount();
}

window.addEventListener('DOMContentLoaded', () => {
  const garden = new Garden;

  window.garden = garden;
  updateInfos();

  if (gardenButtonDOM) {
    gardenButtonDOM.addEventListener('mouseenter', () => backgroundDOM.map((item) => item.classList.add('is-blured')))
    gardenButtonDOM.addEventListener('mouseleave', () => backgroundDOM.map((item) => item.classList.remove('is-blured')))
    gardenButtonDOM.addEventListener('click', () => {
      garden.passDay();
      updateInfos();
    })
  }
})

