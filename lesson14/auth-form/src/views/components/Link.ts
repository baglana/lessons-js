import { Component } from "../../types";

type Props = {
  children: (string | Node)[];
  href: string;
  onClick?: () => void;
};

class Link implements Component {
  readonly #ctrl: AbortController;

  constructor() {
    this.#ctrl = new AbortController();
  }

  render(props: Props) {
    const link = this.#renderCheckbox(props);

    if (props.onClick) {
      this.#addClickEvent(link, props.onClick);
    }

    return link;
  }

  clear() {
    this.#ctrl.abort();
  }

  #addClickEvent(link: HTMLAnchorElement, onClick: () => void) {
    link.addEventListener(
      "click",
      (event: MouseEvent) => {
        event.preventDefault();

        onClick();
      },
      { signal: this.#ctrl.signal }
    );
  }

  #renderCheckbox({ children, href }: Props) {
    const link = document.createElement("a");
    link.classList.add(
      "font-medium",
      "text-primary-600",
      "hover:underline",
      "dark:text-primary-500"
    );
    link.setAttribute("href", href);
    link.append(...children);

    return link;
  }
}

export default Link;
