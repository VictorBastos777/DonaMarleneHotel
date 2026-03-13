// =============================================
// NAVBAR: transparente -> sólida ao rolar
// =============================================
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// =============================================
// MOBILE MENU TOGGLE
// =============================================
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    // Fechar ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// =============================================
// FADE-IN AO SCROLL (IntersectionObserver)
// =============================================
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // delay escalonado para cards em grid
                const delay = entry.target.closest('.diferenciais-grid, .quartos-grid, .codajas-grid, .estrutura-list')
                    ? Array.from(entry.target.parentElement?.children || []).indexOf(entry.target) * 100
                    : 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => observer.observe(el));
}

// =============================================
// GALERIA — FILTROS POR CATEGORIA
// =============================================
const filtrosBtns = document.querySelectorAll('.filtro-btn');
const galeriaItems = document.querySelectorAll('.galeria-item');

filtrosBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filtrosBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        galeriaItems.forEach(item => {
            if (filter === 'all' || item.dataset.categoria === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeInUp 0.4s ease both';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// =============================================
// FORMULÁRIO DE CONTATO → WHATSAPP
// =============================================
function enviarWhatsapp() {
    const nome     = document.getElementById('nome')?.value.trim() || '';
    const mensagem = document.getElementById('mensagem')?.value.trim() || '';

    if (!nome || !mensagem) {
        alert('Por favor, preencha seu nome e a mensagem antes de enviar.');
        return;
    }

    const texto = `Olá! Meu nome é ${nome}.\n\n${mensagem}`;
    const url   = `https://wa.me/5597991512365?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
}

// Expõe globalmente para o onclick inline
window.enviarWhatsapp = enviarWhatsapp;

// =============================================
// ACTIVE NAV LINK (baseado na URL atual)
// =============================================
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = 'var(--amarelo)';
    }
});
