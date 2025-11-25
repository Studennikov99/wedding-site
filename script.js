// Анимация fade-in
document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.fade-block');
    const onScroll = () => {
        const trigger = window.innerHeight * 0.85;
        blocks.forEach(b => {
            const rect = b.getBoundingClientRect();
            if (rect.top < trigger) b.classList.add('visible');
        });
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
});

// Таймер
const weddingDate = new Date('2026-08-14T15:00:00').getTime();
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = '<p style="font-size:1.6em; color:#890000;">Свадьба уже идёт!</p>';
    }
}, 1000);

// Форма RSVP
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    const button = this.querySelector('button');
    button.textContent = 'Отправляем...';
    button.disabled = true;
    setTimeout(() => {
        document.getElementById('rsvp-message').textContent = 'Спасибо! Мы ждём вас на свадьбе!';
        document.getElementById('rsvp-message').style.display = 'block';
        this.reset();
        button.textContent = 'Отправить';
        button.disabled = false;
    }, 800);
});