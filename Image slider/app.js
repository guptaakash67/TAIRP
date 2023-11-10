const slides = document.querySelectorAll('.slide');
let counter = 0;


const slidesImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const goPrev = () => {
    if (counter === 0) {
        counter === slides.length - 1;
    } else {
        counter--;
    };
    slidesImage();
};

const goNext = () => {
    if (counter === slides.length - 1) {
        counter === 0;
    } else {
        counter++;
    };
    slidesImage();
};

