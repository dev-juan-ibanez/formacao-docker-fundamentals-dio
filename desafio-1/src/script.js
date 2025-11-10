class App {
    constructor() {
        this.clickCount = 0;
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateDisplay();
    }

    bindEvents() {
        const clickBtn = document.getElementById('clickBtn');
        clickBtn.addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        this.clickCount++;
        this.updateDisplay();
        this.animateButton();
    }

    updateDisplay() {
        document.getElementById('counter').textContent = this.clickCount;
        document.getElementById('lastClick').textContent = new Date().toLocaleTimeString();
    }

    animateButton() {
        const btn = document.getElementById('clickBtn');
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
}

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// Efeitos adicionais
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});