const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.portfolio-item').length;

// Function to move slider
function moveSlider(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Auto move slider every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    moveSlider(currentIndex);
}, 3000);

// Next and Prev button functionality
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    moveSlider(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    moveSlider(currentIndex);
});
