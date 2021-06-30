const slider = document.querySelector(".range_slider");
const toggle_btn = document.querySelector(".toggle_btn");
const views = document.querySelector(".part1 ");
let cost = document.querySelector(".div1 span");
let value = 0;

slider.style.background =
  "linear-gradient(90deg,hsl(174, 77%, 80%) " +
  slider.value +
  "%, hsl(224, 65%, 95%) 0)";

const data = [
  [8, 6],
  [12, 9],
  [16, 12],
  [24, 18],
  [36, 27],
];

function ch(val) {
  toggle_btn.classList.contains("active") ? (amt = 1) : (amt = 0);
  if (val <= 20) {
    views.textContent = "10K PAGEVIEWS";
    cost.textContent = data[0][amt] + ".00";
  } else if (val <= 40) {
    views.textContent = "50K PAGEVIEWS";
    cost.textContent = data[1][amt] + ".00";
  } else if (val <= 60) {
    views.textContent = "100K PAGEVIEWS";
    cost.textContent = data[2][amt] + ".00";
  } else if (val <= 80) {
    views.textContent = "500K PAGEVIEWS";
    cost.textContent = data[3][amt] + ".00";
  } else if (val <= 100) {
    views.textContent = "1M PAGEVIEWS";
    cost.textContent = data[4][amt] + ".00";
  }
}

slider.oninput = () => {
  slider.style.background =
    "linear-gradient(90deg,hsl(174, 77%, 80%) " +
    slider.value +
    "% , hsl(224, 65%, 95%) 0)";
  views.classList.add("part1");

  value = parseInt(slider.value);
  ch(value);
};

toggle_btn.addEventListener("click", () => {
  toggle_btn.classList.toggle("active");
  ch(value);
});
