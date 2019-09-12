var angle = 0;

var changeBackground = function () {
  angle= angle +1;

  document.body.style.backgroundImage = "linear-gradient("+ angle +" deg, #fff, #000);";
  requestAnimationFrame(changeBackground);

}

changeBackground();
