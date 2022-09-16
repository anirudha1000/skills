// menu start
function myFunction() {
  const x = document.getElementById('menu');
  const y = document.getElementById('overlay');
  if (x.style.display === 'block' || y.style.display === 'block') {
    x.style.display = 'none';
    y.style.display = 'none';
  } else {
    x.style.display = 'block';
    y.style.display = 'block';
  }
}
// menu end

// counter number start
a = 1;
const counterDone = () => {
  a++;
  document.getElementById('counter').innerHTML = a;
  if (a === 347) {
    clearInterval(counter);
  }
};
let counter = setInterval(counterDone, 10);
// counter number end

// Animation Image when scrolling start
function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', reveal);
// Animation Image when scrolling end
