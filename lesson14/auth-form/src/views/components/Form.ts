import { Component } from "../../types";

type Props = {
  children: (string | Node)[];
};

class Form implements Component {
  render(props: Props) {
    return this.#renderForm(...props.children);
  }

  clear() {}

  #renderForm(...children: (string | Node)[]) {
    const form = document.createElement("form");
    form.classList.add("space-y-4", "md:space-y-6");
    form.setAttribute("action", "#");
    form.append(...children);

    return form;
  }
}

export default Form;
