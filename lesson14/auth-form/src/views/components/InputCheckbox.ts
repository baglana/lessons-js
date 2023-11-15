import { Component } from "../../types";

type Props = {
  ariaDescribedby: string;
  inputId: string;
  name: string;
};

class InputCheckbox implements Component {
  render(props: Props) {
    return this.#renderCheckbox(props);
  }

  clear() {}

  #renderCheckbox({ ariaDescribedby, inputId, name }: Props) {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("flex", "items-center", "h-5");

    const checkbox = document.createElement("input");
    checkbox.classList.add(
      "w-4",
      "h-4",
      "border",
      "border-gray-300",
      "rounded",
      "bg-gray-50",
      "focus:ring-3",
      "focus:ring-primary-300",
      "dark:bg-gray-700",
      "dark:border-gray-600",
      "dark:focus:ring-primary-600",
      "dark:ring-offset-gray-800"
    );
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", name);
    checkbox.setAttribute("id", inputId);
    checkbox.setAttribute("aria-describedby", ariaDescribedby);
    checkbox.setAttribute("required", "");

    inputContainer.append(checkbox);

    return inputContainer;
  }
}

export default InputCheckbox;
