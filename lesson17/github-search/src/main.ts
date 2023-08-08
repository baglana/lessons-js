import "./style.css";
import controller from "./abortController.ts";
import handleForm from "./form.ts";
import handleSearch from "./search.ts";

window.addEventListener("load", handleLoad, { once: true });
window.addEventListener("unload", handleUnload, { once: true });

function handleLoad() {
  handleForm(handleSearch);
}

function handleUnload() {
  controller.abort();
}
