import { Component } from "../../types";

type Props = {
  children: (string | Node)[];
};

class CheckboxLabel implements Component {
  render(props: Props) {
    return this.#renderLabel(...props.children);
  }

  clear() {}

  #renderLabel(...children: (string | Node)[]) {
    const labelContainer = document.createElement("div");
    labelContainer.classList.add("ml-3", "text-sm");

    const label = document.createElement("label");
    label.classList.add("text-gray-500", "dark:text-gray-300");
    label.setAttribute("for", "remember");
    label.append(...children);

    labelContainer.append(label);

    return labelContainer;
  }
}

export default CheckboxLabel;
