import { Component } from "../../types";

type Props = {
  children: (string | Node)[];
};

class Title implements Component {
  render(props: Props) {
    return this.#renderTitle(...props.children);
  }

  clear() {}

  #renderTitle(...children: (string | Node)[]) {
    const title = document.createElement("h1");
    title.classList.add(
      "text-xl",
      "font-bold",
      "leading-tight",
      "tracking-tight",
      "text-gray-900",
      "md:text-2xl",
      "dark:text-white"
    );
    title.append(...children);

    return title;
  }
}

export default Title;
