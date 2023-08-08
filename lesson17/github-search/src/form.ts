import controller from "./abortController.ts";

function handleForm(handleSearch: (search: string) => void) {
  const form = document.getElementById("search-form");

  form?.addEventListener(
    "submit",
    (event: SubmitEvent) => handleSubmit(event, handleSearch),
    { signal: controller.signal },
  );
}

function handleSubmit(
  event: SubmitEvent,
  handleSearch: (search: string) => void,
) {
  event.preventDefault();
  const { currentTarget } = event;
  if (!currentTarget) {
    return;
  }
  const formData = new FormData(currentTarget as HTMLFormElement);

  const search = formData.get("search");
  const searchStr = !search || search instanceof File ? "" : search;
  handleSearch(searchStr);
}

export default handleForm;
