const content = document.querySelector("section");

let currentPosition = window.pageYOffset;

const callDistort = () => {
  const newPosition = window.pageYOffset;
  const difference = newPosition - currentPosition;
  const speed = difference * 0.1;

  content.style.transform = "skewY(" + speed + "deg)";
  currentPosition = newPosition;
  requestAnimationFrame(callDistort);
};

callDistort();