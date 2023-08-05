import "./style.css";

const ctrl = new AbortController();
const signal = ctrl.signal;

window.addEventListener("load", () => {
  const btn = document.getElementById("btn");

  function alertOne() {
    alert("1");
  }

  if (btn) {
    btn.addEventListener("click", alertOne, { signal });
    btn.addEventListener("click", () => alert("3"), { signal });
    btn.addEventListener("click", () => alert("4"));

    ctrl.abort();

    btn.onclick = () => alert(2);
  }
});

window.addEventListener(
  "unload",
  () => {
    // ctrl.abort();
  },
  true,
);
