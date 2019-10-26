let image = document.getElementById("image1");

image.onmouseenter = function() {
  image.style.border = "3px solid red";
};
image.onmouseout = function() {
  image.style.border = "0";
};
