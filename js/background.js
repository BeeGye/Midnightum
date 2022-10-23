const colors = [
  "#fbf8cc",
  "#fde4cf",
  "#ffcfd2",
  "#f1c0e8",
  "#cfbaf0",
  "#a3c4f3",
  "#90dbf4",
  "#8eecf5",
  "#98f5e1",
  "#b9fbc0",
  //**! new palette */
  "#fec5bb",
  "#fcd5ce",
  "#fae1dd",
  "#f8edeb",
  "#e8e8e4",
  "#d8e2dc",
  "#ece4db",
  "#ffe5d9",
  "#ffd7ba",
  "#fec89a",
  //**! 3rd palette */
  "#ffc09f",
  "#ffee93",
  "#fcf5c7",
  "#a0ced9",
  "#adf7b6",
];

const bgColor1 = colors[Math.floor(Math.random() * colors.length)];
const bgColor2 = colors[Math.floor(Math.random() * colors.length)];
const bgColor3 = colors[Math.floor(Math.random() * colors.length)];
document.body.style.backgroundImage = `linear-gradient(to left top, ${bgColor1}, ${bgColor2}, ${bgColor3})`;
