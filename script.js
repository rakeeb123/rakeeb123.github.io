colors = ["#192BC2", "#78C0E0", "#3A86FF", "#e01f66"];

(function() {
  setModeEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setBioEventListener();
  setRandomPhoto();

  setInterval(() => {
    setRandomPhoto();
  }, 2500);

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
})();

/* Dark Mode */
function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", event => {
    if (event.target.checked) {
      colors = ["#ded1d5", "#78C0E0", "#3A86FF", "#e01f66"];
      list.add("dark-mode");
      setRandomLinkColor();
    }  else {
      list.remove("dark-mode");
      colors = ["#192BC2", "#78C0E0", "#3A86FF", "#e01f66"];
      setRandomLinkColor();
    } 
  });
}

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName("a")).forEach(e => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll("a, button")).forEach(e => {
    e.addEventListener("mouseover", setRandomLinkColor);
  });
}

/* Photos */

function setRandomPhoto() {
  let num = Math.floor(Math.random() * 1) + 1;
  document.getElementById("propic").src = `./img/face${num}.jpg`;
}

/* Bio Toggles */

function setBioEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach(e => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  if (e.target.id == "resume") {
    window.open("resume.pdf");
  } else {
    let bioType = e.target;
    let color = getRandomColor();
    off(bioType);
    bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
    let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
    if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
  }
}

function off(bioType) {
  Array.from(document.getElementsByTagName("button")).forEach(butt => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("bio")).forEach(e => {
    e.classList.remove("show");
  });
}
