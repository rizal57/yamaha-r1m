const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const moto = document.querySelectorAll('.img-moto');
const dot = document.querySelectorAll('.dot');
const longMoto = moto.length;
let motoNumber = 0;

next.addEventListener('click', function () {
  moto.forEach(function (moto) {
    moto.classList.remove('active');
  });
  dot.forEach(function (dot) {
    dot.classList.remove('active');
  });

  motoNumber++;

  if (motoNumber > longMoto - 1) {
    motoNumber = 0;
  }
  moto[motoNumber].classList.add('active');
  dot[motoNumber].classList.add('active');
});

prev.addEventListener('click', function () {
  moto.forEach(function (moto) {
    moto.classList.remove('active');
  });
  dot.forEach(function (dot) {
    dot.classList.remove('active');
  });

  motoNumber--;

  if (motoNumber < 0) {
    motoNumber = longMoto - 1;
  }
  moto[motoNumber].classList.add('active');
  dot[motoNumber].classList.add('active');
});

// auto slide
let playSlide;

let repeater = function () {
  playSlide = setInterval(function () {
    moto.forEach((moto) => {
      moto.classList.remove('active');
    });
    dot.forEach((dot) => {
      dot.classList.remove('active');
    });

    motoNumber++;

    if (motoNumber > longMoto - 1) {
      motoNumber = 0;
    }
    moto[motoNumber].classList.add('active');
    dot[motoNumber].classList.add('active');
  }, 5000);
};
repeater();
