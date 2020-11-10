function createImg(src) {
  let ele = document.createElement("img")
  ele.setAttribute("src", src)
  return ele;
}
export default createImg;