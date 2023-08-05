import "./style.css";

window.addEventListener("load", loadHandler, { once: true });
window.addEventListener("unload", unloadHandler, { once: true });

function loadHandler() {
  const form = document.getElementById("login-form");

  form?.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    const { currentTarget } = event;
    if (currentTarget instanceof HTMLFormElement) {
      console.log("currentTarget.elements", currentTarget.elements);

      const formData = new FormData(currentTarget);

      console.log(formData.get("user-email"));

      // const emailEl = currentTarget.elements.namedItem("user-email");
      // if (emailEl instanceof HTMLInputElement) {
      //   console.log("emailEl?.value", emailEl?.value);
      // }
    }
  });
}

function unloadHandler() {
  return null;
}
