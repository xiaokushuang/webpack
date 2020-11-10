function createElement(tag, text) {
  let ele = document.createElement(tag);
  if (text) {
    ele.innerText = text;
  }
  return ele;
}
export default createElement;