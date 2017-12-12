/**
 * @name
 * @summary Get the x,y relative coordinates of an element's center
 *
 * @description
 * Get the x,y relative coordinates of an element's center
 *
 * @param {HTMLElement} element - the element that we want to have its center
 * @returns {Object} a x, y object with the center of the element
 *
 * @example
 * var containerEl = document.getElementById('container')
 * elementRelativeCenter(containerEl)
 * //=> { x: 680, y: 220 }
 */
export default function elementRelativeCenter(element) {
  const planogramContainerWidth = element.clientWidth;
  const distanceHorizontalScrolled = element.scrollLeft;
  const planogramContainerHeight = element.clientHeight;
  const distanceVerticalScrolled = element.scrollTop;

  const x = (planogramContainerWidth / 2) + distanceHorizontalScrolled;
  const y = (planogramContainerHeight / 2) + distanceVerticalScrolled;

  return { x, y };
}
