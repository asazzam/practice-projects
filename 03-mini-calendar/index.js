const monthName = document.getElementById("month");
const dayName = document.getElementById("day");
const dayNum = document.getElementById("number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthName.innerText = date.toLocaleString("en", {
  month: "long",
});

dayName.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNum.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
