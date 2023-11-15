const title = document.getElementById("title");
const bananaEl = document.getElementById("banana");
const bananaTextEl = document.getElementById("banana-text");

bananaEl.style.background = "tomato";

const listener1 = (event) => {
  console.log(event.currentTarget);
};

title.addEventListener("click", listener1, true);
bananaEl.addEventListener("click", listener1, true);
bananaTextEl.addEventListener("click", listener1, true);

setTimeout(() => {
  title.removeEventListener("click", listener1);
  bananaEl.removeEventListener("click", listener1);
  bananaTextEl.removeEventListener("click", listener1);
}, 3000);
