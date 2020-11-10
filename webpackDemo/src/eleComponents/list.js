import createElement from './tool'

function createULElement(parent, num) {
  let ulEle = createElement("ul");
  for (let i = 0; i < num; i++) {
    ulEle.appendChild(createElement("li", i + 1))
  }
  parent.appendChild(ulEle)
}
export default createULElement;