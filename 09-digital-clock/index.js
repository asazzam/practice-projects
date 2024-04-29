const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateClock() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampmEl = h >= 12 ? "PM" : "AM";

  // Adjust hours for 12-hour format
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerText = h;
  minute.innerText = m;
  seconds.innerText = s;
  ampm.innerText = ampmEl;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
