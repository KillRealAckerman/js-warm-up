const block = document.querySelector(".block");
const cycle = document.querySelector(".cycle");
let velosity = 0;
let Gravity = 0.3;
// бонусы
// setInterval(() => {
//   cycle.style.left = Math.random() * 100 + "%";
//   cycle.style.top = Math.random() * 40 + "%";
// }, 1000);

document.addEventListener("keydown", (e) => {
  let current = parseInt(block.style.left) || 50; // если пусто — 50
  let currentTop = parseInt(block.style.height) || 20;
  //   if (parseInt(block.style.left) > 95) {
  //     current = 85;
  //   }
  if (e.key === "ArrowRight" && current < 95) {
    e.preventDefault();

    current += 6;
  }
  if (e.key === "ArrowLeft" && current > 5) {
    e.preventDefault();

    current -= 6;
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    currentTop += 15;
  }
  if (e.key === "ArrowDown") {
    e.preventDefault();
    currentTop -= 15;
  }

  block.style.left = current + "%";
  block.style.height = currentTop + "px";
});

setInterval(() => {
  const DomRectBlock = block.getBoundingClientRect();
  const DomRectCycle = cycle.getBoundingClientRect();
  let currentTop = parseFloat(cycle.style.top) || 0;
  let currentLeft = parseFloat(cycle.style.left) || 855;
  console.log(currentTop);
  currentTop += 5;
  cycle.style.top = currentTop + "px";
  cycle.style.left = currentLeft + "px";
  if (
    DomRectCycle.bottom >= DomRectBlock.top &&
    DomRectCycle.top <= DomRectBlock.bottom &&
    DomRectCycle.right >= DomRectBlock.left &&
    DomRectCycle.left <= DomRectBlock.right
  ) {
    console.log("СТОЛКНОВЕНИЕ!");
    currentTop = (Math.random() * 850 + 50) * -1;
    currentLeft = Math.random() * 1500;
    cycle.style.top = currentTop + "px";
    cycle.style.left = currentLeft + "px";
  }
}, 16);
