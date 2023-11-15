const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + images[i]);
  newImage.setAttribute('alt', 'Imagem ' + (i + 1));
  thumbBar.appendChild(newImage);

  // Adicionando manipulador onclick a cada imagem em miniatura
  newImage.onclick = function (event) {
    displayImage(event.target.getAttribute('src'));
  };
}

// Remova essa parte do código, pois já foi adicionada no loop
// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

btn.onclick = function () {
  if (btn.getAttribute('class') === 'dark') {
    // Modo Claro
    btn.setAttribute('class', 'light');
    btn.textContent = 'Clarear';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    // Modo Escuro
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Escurecer';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
};