import { Component } from "../../types";

type Props = {
  children: (string | Node)[];
};

class Container implements Component {
  render(props: Props) {
    const wrapper = this.#renderWrappers(...props.children);
    return this.#renderOuter(wrapper);
  }

  clear() {}

  #renderWrappers(...children: (string | Node)[]) {
    const wrapper1 = document.createElement("div");
    wrapper1.classList.add(
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "px-6",
      "py-8",
      "mx-auto",
      "md:h-screen",
      "lg:py-0"
    );

    const wrapper2 = document.createElement("div");
    wrapper2.classList.add(
      "w-full",
      "bg-white",
      "rounded-lg",
      "shadow",
      "dark:border",
      "md:mt-0",
      "sm:max-w-md",
      "xl:p-0",
      "dark:bg-gray-800",
      "dark:border-gray-700"
    );

    const wrapper3 = document.createElement("div");
    wrapper3.classList.add("p-6", "space-y-4", "md:space-y-6", "sm:p-8");

    wrapper3.append(...children);
    wrapper2.append(wrapper3);
    wrapper1.append(wrapper2);

    return wrapper1;
  }

  #renderOuter(...children: (string | Node)[]) {
    const container = document.createElement("section");
    container.classList.add("bg-gray-50", "dark:bg-gray-900");
    container.append(...children);

    return container;
  }
}

export default Container;
