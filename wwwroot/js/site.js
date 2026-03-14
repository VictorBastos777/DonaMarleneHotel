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

// =============================================
// LIGHTBOX DA GALERIA
// =============================================
var _lbItems = [];
var _lbIndex = 0;

function _lbOpen(el) {
    _lbItems = Array.from(document.querySelectorAll('.galeria-item:not(.hidden)'));
    _lbIndex = _lbItems.indexOf(el);
    _lbShow(_lbIndex);
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function _lbShow(idx) {
    var item = _lbItems[idx];
    if (!item) return;
    document.getElementById('lightboxImg').src = item.querySelector('img').src;
    document.getElementById('lightboxTitulo').textContent = item.querySelector('.galeria-item-overlay span').textContent;
    document.getElementById('lightboxCategoria').textContent = item.querySelector('.galeria-item-overlay small').textContent;
}

function _lbClose() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function _lbNav(dir) {
    _lbIndex = (_lbIndex + dir + _lbItems.length) % _lbItems.length;
    _lbShow(_lbIndex);
}

window._lbOpen = _lbOpen;
window._lbClose = _lbClose;
window._lbNav = _lbNav;

document.addEventListener('keydown', function(e) {
    if (!document.getElementById('lightbox') || !document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'Escape') _lbClose();
    if (e.key === 'ArrowRight') _lbNav(1);
    if (e.key === 'ArrowLeft') _lbNav(-1);
});

// Clique nas imagens da galeria
document.addEventListener('click', function(e) {
    var item = e.target.closest('.galeria-item');
    if (item && !e.target.closest('#lightbox')) {
        _lbOpen(item);
    }
});
