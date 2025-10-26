const button = document.querySelector("button");
const handleClick = () => {
  if (button.innerText === "Click me 🍔") {
    button.innerText = "Ah i got clicked 🌭";
    button.classList.add("click");
  } else {
    button.innerText = "Click me 🍔";
    button.classList.remove("click");
  }
};
button.addEventListener("click", handleClick);
