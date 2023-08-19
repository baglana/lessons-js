import { Component } from "../../types";

type Props = {
  children: (string | Node)[];
};

class Text implements Component {
  render(props: Props) {
    return this.#renderCheckbox(props);
  }

  clear() {}

  #renderCheckbox({ children }: Props) {
    const text = document.createElement("p");
    text.classList.add(
      "text-sm",
      "font-light",
      "text-gray-500",
      "dark:text-gray-400"
    );

    text.append(...children);

    return text;
  }
}

export default Text;
