// ==========================================
// PARTE 1: LÓGICA DO TERMINAL
// ==========================================

const outputArea = document.getElementById('output-area');
const terminalBody = document.querySelector('.terminal-body');

function openSection(sectionName) {
    const template = document.getElementById(`tpl-${sectionName}`);
    if (template) {
        const clone = template.content.cloneNode(true);
        outputArea.appendChild(clone);
        scrollToBottom();
    }
}

function clearTerminal() {
    outputArea.innerHTML = '';
}

function scrollToBottom() {
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// ==========================================
// PARTE 2: LÓGICA DO TEMA (CLARO/ESCURO)
// ==========================================

const themeBtn = document.getElementById('theme-btn');
let isLightMode = false;

function toggleTheme() {
    // Alterna a classe no corpo do site
    document.body.classList.toggle('light-mode');
    
    // Atualiza a variável de controle
    isLightMode = document.body.classList.contains('light-mode');

    // Troca o ícone do botão
    if (isLightMode) {
        themeBtn.innerText = '☾'; // Lua para voltar ao escuro
    } else {
        themeBtn.innerText = '☀'; // Sol para ir ao claro
    }
}

// ==========================================
// PARTE 3: EFEITO MATRIX (CHUVA DE CÓDIGO)
// ==========================================

const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '0123456789ABCDEFJAVAHTMLCSSLINUXSPRINGBOOTPYTHON';
const charArray = chars.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    // --- MUDANÇA IMPORTANTE AQUI ---
    // A cor do fundo (fade) depende do modo atual
    // Se for claro, usamos branco transparente. Se for escuro, preto transparente.
    
    if (isLightMode) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // Rastro branco
    } else {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';      // Rastro preto
    }
    
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cor do texto
    if (isLightMode) {
        ctx.fillStyle = '#003300'; // Verde bem escuro (para ler no fundo branco)
    } else {
        ctx.fillStyle = '#0F0';    // Verde neon clássico
    }
    
    ctx.font = fontSize + 'px Courier New';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});