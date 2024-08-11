document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggleBtn = item.querySelector('.toggle-btn img');

        question.addEventListener('click', function() {
            const isOpen = answer.classList.contains('show');

            // Tüm SSS öğelerini kapat
            faqItems.forEach(i => {
                i.querySelector('.faq-answer').classList.remove('show');
                i.querySelector('.toggle-btn img').src = './assets/images/icon-plus.svg';
            });

            // Eğer tıklanan öğe açıksa kapalı yap, değilse aç
            if (!isOpen) {
                answer.classList.add('show');
                toggleBtn.src = './assets/images/icon-minus.svg';
            }
        });
    });
});