const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

const day = new Date();

const hh = day.getHours() * 30;
const mm = day.getMinutes() * 6;
const ss = day.getSeconds() * 6;
const addZero = (num) => (num < 9 ? `0${num}` : num);

setInterval(() => {
  const day = new Date();

  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * 6;
  const ss = day.getSeconds() * 6;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
  // Digital Clock

  const time = new Date();
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const ampm = document.getElementById("ampm");

  //   Show Digital Time
  const h =
    time.getHours() === 0
      ? 12
      : time.getHours() > 12
      ? time.getHours() - 12
      : time.getHours();
  hours.innerHTML = addZero(h);
  minutes.innerHTML = addZero(time.getMinutes());
  seconds.innerHTML = addZero(time.getSeconds());
  ampm.innerHTML = time.getHours() > 12 ? "PM" : "AM";
});
