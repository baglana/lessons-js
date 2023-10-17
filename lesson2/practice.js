function greetings(lang = "kz") {
  if (lang === "en") {
    return "Hello";
  } else if (lang === "kz") {
    return "Salamatsyz ba?";
  } else if (lang === "ru") {
    return "Privet";
  }
}

const greet = greetings("kz");

console.log(greet);
