let imgs = document.querySelectorAll('.img-select a');
let imgBtns = [...imgs];
let imgId = 1;
let startX;
let scrollLeft;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

let slider = document.querySelector('.img-showcase');

slider.addEventListener('mousedown', (e) => {
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!slider.classList.contains('active')) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
});

window.addEventListener('resize', slideImage);
