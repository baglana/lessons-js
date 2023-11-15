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
} from "../components/";

type Props = {
  gotoSignUp: () => void;
};

class SignIn implements Page, Component {
  readonly #titleComponent: Title;
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
    this.#titleComponent = new Title();
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
    const title = this.#titleComponent.render({
      children: ["Sign in to your account"],
    });
    const emailBlock = this.#emailBlockComponent.render();
    const passwordBlock = this.#passwordBlockComponent.render({
      label: "Password",
      inputId: "password",
      name: "password",
      type: "password",
    });
    const rememberMeBlock = this.#renderRememberMeBlock({
      checkbox: this.#checkboxComponent.render({
        ariaDescribedby: "remember",
        inputId: "remember",
        name: "remember",
      }),
      label: this.#checkboxLabelComponent.render({ children: ["Remember me"] }),
    });
    const btn = this.#buttonComponent.render({ children: ["Sign In"] });
    const link = this.#linkComponent.render({
      children: ["Register here"],
      onClick: props.gotoSignUp,
      href: "#",
    });
    const gotoSignUp = this.#textComponent.render({
      children: ["Don’t have an account yet? ", link],
    });
    const form = this.#formComponent.render({
      children: [emailBlock, passwordBlock, rememberMeBlock, btn, gotoSignUp],
    });

    return this.#containerComponent.render({ children: [title, form] });
  }

  clear() {
    this.#linkComponent.clear();
  }

  #renderRememberMeBlock({
    checkbox,
    label,
  }: {
    checkbox: string | Node;
    label: string | Node;
  }) {
    const outer = document.createElement("div");
    outer.classList.add("flex", "items-center", "justify-between");

    const inner = document.createElement("div");
    inner.classList.add("flex", "items-start");

    inner.append(checkbox, label);

    const forgotPassword = document.createElement("a");
    forgotPassword.classList.add(
      "text-sm",
      "font-medium",
      "text-primary-600",
      "hover:underline",
      "dark:text-primary-500",
    );
    forgotPassword.setAttribute("href", "#");
    forgotPassword.append("Forgot password?");

    outer.append(inner, forgotPassword);

    return outer;
  }
}

export default SignIn;
