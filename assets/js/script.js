let image = document.getElementById('image1');

//Ajout de bordures rouges au survol
image.onmouseenter = function() {
  image.style.border = '3px solid red';
};
//Suppression des bordures
image.onmouseout = function() {
  image.style.border = 'none';
};
