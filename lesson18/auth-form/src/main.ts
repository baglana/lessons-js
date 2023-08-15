import "./style.css";
import controller from "./utils/abortController.ts";

window.addEventListener("load", handleLoad, { once: true });
window.addEventListener("unload", handleUnload, { once: true });

function handleLoad() {}

function handleUnload() {
  controller.abort();
}
