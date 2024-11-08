document.addEventListener("mousemove", function(e) {
  const cursor = document.querySelector(".cursor");

  // Immediate position change for cursor
  cursor.style.left = `${e.pageX - 5}px`;
  cursor.style.top = `${e.pageY - 5}px`;

  // Adjust the brightness effect on body
  const cursorRadius = 50;
  const x = e.pageX - window.innerWidth / 2;
  const y = e.pageY - window.innerHeight / 2;
  const distance = Math.sqrt(x * x + y * y);

  document.body.style.filter = distance < cursorRadius ? "brightness(1.6)" : "brightness(1.4)";
});


// ------------------------------------------- //


const aboutWindow = document.getElementById("aboutWindow");
const aboutToggleButton = document.getElementById("aboutToggle");
const aboutCloseButton = document.getElementById("aboutClose");

aboutToggleButton.onclick = function() {
    aboutWindow.style.display = aboutWindow.style.display === "block" ? "none" : "block";
}

aboutCloseButton.onclick = function() {
    aboutWindow.style.display = "none";
}



const moreWindow = document.getElementById("moreWindow");
const toggleMoreButton = document.getElementById("toggleMore");
const closeMoreButton = document.getElementById("closeMore");

toggleMoreButton.onclick = function() {
    moreWindow.style.display = moreWindow.style.display === "block" ? "none" : "block";
}

closeMoreButton.onclick = function() {
    moreWindow.style.display = "none";
}