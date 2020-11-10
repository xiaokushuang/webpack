import createULElement from './eleComponents/list.js'
import createP from './eleComponents/p.js'
let root = document.querySelector("body")


createP(root, '你好世界')
createULElement(root, 4)