document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('price-slider');
    const stats = document.querySelectorAll(".stats h3");

    if (slider) {
        const rangeMin = 10000;
        const rangeMax = 50000;

        const updatePrice = (value) => {
            const sliderMin = slider.min || 0;
            const sliderMax = slider.max || 100;
            const upperLimit = rangeMin + ((value - sliderMin) / (sliderMax - sliderMin)) * (rangeMax - rangeMin);
            
            document.getElementById('price-min').textContent = `$${rangeMin.toLocaleString()}`;
            document.getElementById('price-max').textContent = `$${upperLimit.toLocaleString()}`;
        };

        updatePrice(slider.value);

        slider.addEventListener('input', debounce(() => updatePrice(slider.value), 100));
    }

    if (stats.length) {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-target"), 10) || 0;

            const updateCount = () => {
                let count = 0;
                const increment = Math.max(target / 200, 1);

                const animate = () => {
                    count += increment;
                    stat.innerText = count >= target ? target : Math.floor(count);
                    if (count < target) requestAnimationFrame(animate);
                };

                animate();
            };

            updateCount();
        });
    }
});


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
