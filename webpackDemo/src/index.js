import createULElement from './eleComponents/list.js'
import createP from './eleComponents/p.js'
import createImg from './eleComponents/img'
import './images/1.png'
import "./css/index.scss"
let root = document.querySelector("body")
root.appendChild(createImg("./dist/images/1.png"))
createP(root, '你好世界')
createULElement(root, 4)