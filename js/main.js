document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.querySelector('.close-modal');

    openBtns.forEach(btn => {
        btn.onclick = () => modal.style.display = 'flex';
    });

    closeBtn.onclick = () => modal.style.display = 'none';

    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = 'none';
    };

    const form = document.getElementById('lead-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        alert('Спасибо! Мы свяжемся с вами в течение 15 минут.');
        modal.style.display = 'none';
    };
});