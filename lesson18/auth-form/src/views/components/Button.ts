import { Component } from "../../types";

type Props = {
  children: (string | Node)[];
};

class Button implements Component {
  render({ children }: Props) {
    return this.#renderBtn(...children);
  }

  clear() {}

  #renderBtn(...children: (string | Node)[]) {
    const btn = document.createElement("button");
    btn.classList.add(
      "w-full",
      "text-white",
      "bg-primary-600",
      "hover:bg-primary-700",
      "focus:ring-4",
      "focus:outline-none",
      "focus:ring-primary-300",
      "font-medium",
      "rounded-lg",
      "text-sm",
      "px-5",
      "py-2.5",
      "text-center",
      "dark:bg-primary-600",
      "dark:hover:bg-primary-700",
      "dark:focus:ring-primary-800"
    );
    btn.setAttribute("type", "submit");
    btn.append(...children);

    return btn;
  }
}

export default Button;
