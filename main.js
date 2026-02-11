const roles = [
  "Machine Learning Engineer",
  "AI Developer",
  "Data Enthusiast"
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];
  
  if (!isDeleting) {
    document.getElementById("typing").innerText =
      currentRole.substring(0, j++);
  } else {
    document.getElementById("typing").innerText =
      currentRole.substring(0, j--);
  }

  if (j == currentRole.length) isDeleting = true;
  if (j == 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
