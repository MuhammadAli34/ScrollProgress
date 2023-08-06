let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);
window.addEventListener("scroll", () => {
  let scrolltop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrolltop / height) * 100}%`;
});
