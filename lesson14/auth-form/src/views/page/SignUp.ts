import { Component, Page } from "../../types/";
import {
  Button,
  CheckboxLabel,
  Container,
  EmailBlock,
  Form,
  InputCheckbox,
  Link,
  PasswordBlock,
  Text,
  Title,
} from "../components";

type Props = {
  gotoSignIn: () => void;
};

class SignUp implements Page, Component {
  readonly #titleContainer: Title;
  readonly #formComponent: Form;
  readonly #emailBlockComponent: EmailBlock;
  readonly #passwordBlockComponent: PasswordBlock;
  readonly #checkboxComponent: InputCheckbox;
  readonly #checkboxLabelComponent: CheckboxLabel;
  readonly #linkComponent: Link;
  readonly #buttonComponent: Button;
  readonly #textComponent: Text;
  readonly #containerComponent: Container;

  constructor() {
    this.#titleContainer = new Title();
    this.#formComponent = new Form();
    this.#emailBlockComponent = new EmailBlock();
    this.#passwordBlockComponent = new PasswordBlock();
    this.#checkboxComponent = new InputCheckbox();
    this.#checkboxLabelComponent = new CheckboxLabel();
    this.#linkComponent = new Link();
    this.#buttonComponent = new Button();
    this.#textComponent = new Text();
    this.#containerComponent = new Container();
  }

  render(props: Props) {
    const title = this.#titleContainer.render({
      children: ["Create an account"],
    });
    const email = this.#emailBlockComponent.render();
    const password = this.#passwordBlockComponent.render({
      label: "Password",
      inputId: "password",
      name: "password",
      type: "password",
    });
    const confirmPassword = this.#passwordBlockComponent.render({
      label: "Confirm password",
      inputId: "confirm-password",
      name: "confirm-password",
      type: "password",
    });
    const checkbox = this.#checkboxComponent.render({
      ariaDescribedby: "terms",
      inputId: "terms",
      name: "terms",
    });
    const link = this.#linkComponent.render({
      children: ["Terms and Conditions"],
      href: "#",
    });
    const checkBoxLabel = this.#checkboxLabelComponent.render({
      children: ["I accept the ", link],
    });
    const checkBoxContainer = this.#renderCheckboxContainer(
      checkbox,
      checkBoxLabel,
    );
    const btn = this.#buttonComponent.render({
      children: ["Create an account"],
    });
    const text = this.#textComponent.render({
      children: [
        "Already have an account? ",
        this.#linkComponent.render({
          children: ["Login here"],
          onClick: props.gotoSignIn,
          href: "#",
        }),
      ],
    });
    const form = this.#formComponent.render({
      children: [
        email,
        password,
        confirmPassword,
        checkBoxContainer,
        btn,
        text,
      ],
    });

    return this.#containerComponent.render({ children: [title, form] });
  }

  clear() {
    this.#linkComponent.clear();
  }

  #renderCheckboxContainer(...children: (string | Node)[]) {
    const inner = document.createElement("div");
    inner.classList.add("flex", "items-start");
    inner.append(...children);

    return inner;
  }
}

export default SignUp;
