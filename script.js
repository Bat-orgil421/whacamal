let score = 0;
let cmole = null;
let gmsec = 10;
isgamestarted = false;

const holes = document.querySelectorAll(".hole");
const scoret = document.querySelector(".score");
const start = document.querySelector(".start");
const second = document.querySelector(".secbar");
const timer = document.querySelector(".timer");

function startgame() {
  gmsec = 10;
  score = 0;
  showrandommole();
}

start.addEventListener("click", () => {
  if (isgamestarted) return;
  isgamestarted = true;
  startgame();

  const time = setInterval(() => {
    if (gmsec === 0) {
      isgamestarted = false;
      clearInterval(time);
      second.textContent = 10 - gmsec;
      alert(`your score ${score}`)
      location.reload()
    } else {
      showrandommole();
      gmsec = gmsec - 1;
      second.textContent = gmsec
    }
  }, 1000);
});

for (let i = 0; i < holes.length; i++) {
  const mole = document.createElement("div");
  mole.style.display = "none";
  mole.className = "mole";
  mole.id = i;

  mole.addEventListener("click", () => {
    mole.style.backgroundImage = "url(./mole_dead.png)";
    score = score + 1;

    scoret.textContent = score;

    setTimeout(() => {
      mole.style.backgroundImage = "url(./mole.png)";
      mole.style.display = "none";
      cmole = null;
      showrandommole();
    }, 500);
  });

  holes[i].appendChild(mole);
}

function showrandommole() {
  if (cmole === null) {
    const moleindex = Math.floor(Math.random() * 9);
    cmole = moleindex;
    const moles = document.querySelectorAll(".mole");
    moles[moleindex].style.display = "block";
  }
}