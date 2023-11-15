import { Component } from "../../types";

type Props = {};

class EmailBlock implements Component {
  render() {
    return this.#renderEmailBlock();
  }

  clear() {}

  #renderEmailBlock() {
    const container = document.createElement("div");

    const label = document.createElement("label");
    label.classList.add(
      "block",
      "mb-2",
      "text-sm",
      "font-medium",
      "text-gray-900",
      "dark:text-white",
    );
    label.setAttribute("for", "email");
    label.append("Your email");

    const input = document.createElement("input");
    input.classList.add(
      "bg-gray-50",
      "border",
      "border-gray-300",
      "text-gray-900",
      "sm:text-sm",
      "rounded-lg",
      "focus:ring-primary-600",
      "focus:border-primary-600",
      "block",
      "w-full",
      "p-2.5",
      "dark:bg-gray-700",
      "dark:border-gray-600",
      "dark:placeholder-gray-400",
      "dark:text-white",
      "dark:focus:ring-blue-500",
      "dark:focus:border-blue-500",
    );
    input.setAttribute("type", "email");
    input.setAttribute("name", "email");
    input.setAttribute("id", "email");
    input.setAttribute("placeholder", "name@company.com");
    input.setAttribute("required", "");

    container.append(label, input);

    return container;
  }
}

export default EmailBlock;
