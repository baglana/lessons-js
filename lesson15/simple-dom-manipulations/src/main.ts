import "./style.css";

const ctrl = new AbortController();
const signal = ctrl.signal;

window.addEventListener(
  "load",
  () => {
    // const btn = document.getElementById("click-me") as HTMLButtonElement;
    // const btnRemove = document.getElementById(
    //   "remove-event-listener",
    // ) as HTMLButtonElement;
    //
    // function greetings(event: MouseEvent) {
    //   console.log("target", event.target);
    //   console.log("currentTarget", event.currentTarget);
    //
    //   const str = "Hey Yo!";
    //   alert(str);
    // }
    //
    // function removeEventListener() {
    //   ctrl.abort();
    // }
    //
    // if (btn) {
    //   btn.addEventListener("click", greetings, { signal });
    // }
    //
    // if (btnRemove) {
    //   btnRemove.addEventListener("click", removeEventListener);
    // }

    const container = document.getElementById("container");
    const child = document.getElementById("child");

    if (container) {
      container.addEventListener(
        "click",
        (event: MouseEvent) => {
          console.log("parent target", event.target);
          console.log("parent currentTarget", event.currentTarget);
        },
        { signal },
      );
    }

    if (child) {
      child.addEventListener(
        "click",
        (event: MouseEvent) => {
          console.log("child target", event.target);
          console.log("child currentTarget", event.currentTarget);
        },
        { signal },
      );
    }
  },
  true,
);

window.addEventListener(
  "unload",
  () => {
    ctrl.abort();
  },
  true,
);
