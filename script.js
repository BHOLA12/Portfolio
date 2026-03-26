// ═══════ PARTICLES ═══════
(function () {
    const container = document.getElementById('particles');
    const count = 30;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 16) + 's';
        p.style.animationDelay = (Math.random() * 12) + 's';
        p.style.width = p.style.height = (1 + Math.random() * 2) + 'px';
        if (Math.random() > 0.7) {
            p.style.background = 'rgba(59, 130, 246, 0.25)';
        }
        container.appendChild(p);
    }
})();

// ═══════ CURSOR GLOW ═══════
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// ═══════ NAVBAR SCROLL ═══════
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ═══════ SCROLL REVEAL ═══════
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ═══════ SUBMIT HANDLER ═══════
function handleSubmit(btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ &nbsp;Sent!';
    btn.style.background = '#16a34a';
    setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
    }, 2500);
}

// ═══════ SMOOTH LINK CLICKS ═══════
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
