let positions = [0, 1, 2];
let length;

const myMap = new Map();
myMap.set(0, 'fishing');
myMap.set(1, 'girl');
myMap.set(2, 'rasp');

window.onload = getWidth;
window.addEventListener('resize', getWidth);

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', move));

function move() {
  positions[getIndex(this.dataset.index)] = positions[1];
  positions[1] = Number(this.dataset.index);
  changePlace();
}

function getIndex(n) {
  if (positions[0] == n) return 0; else if (positions[1] == n) return 1;
  return 2;
}

function changePlace() {
  for (let step = 0; step < 3; step++) {
    const shift = -(positions[step] - step) * length;
    const scale = (step == 1) ? 1.2 : 1; 
    const opac = (step == 1) ? 0.3 : 0.8; 
    document.documentElement.style.setProperty(`--card${positions[step]}`, `translateX(${shift}vw) scale(${scale})`);
    document.documentElement.style.setProperty(`--src${positions[step]}`, `linear-gradient(rgba(29, 38, 113, ${opac}), rgba(195, 55, 100, ${opac})), url('/Project/images/${myMap.get(positions[step])}.jpg')`);
  }
} 

function getWidth() {
  const width = document.querySelector('html').clientWidth + 17;
  if (width > 1599) { length = 40 }
  else if (width > 959 && width < 1600) { length = 50; }
  else if (width > 767 && width < 960) { length = 60; }
  else { length = 70; }
  changePlace();
}