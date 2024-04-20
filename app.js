const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const color = button.id;
    body.style.backgroundColor = color;
  });
});

// if (event.target === grey) {
//   body.style.backgroundColor = event.target.id;
// }
// if (event.target === blue) {
//   body.style.backgroundColor = event.target.id;
// }
// if (event.target === white) {
//   body.style.backgroundColor = event.target.id;
// }
// if (event.target === yellow) {
//   body.style.backgroundColor = event.target.id;
// }

// if (event.target === button) {
//   body.style.backgroundColor = event.target.id;
// }
