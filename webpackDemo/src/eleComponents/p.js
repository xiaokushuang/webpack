import createElement from './tool.js'

function createP(parent, text) {
  parent.appendChild(createElement('p', text))
}
export default createP;