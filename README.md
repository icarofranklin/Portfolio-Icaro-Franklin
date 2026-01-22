🖥️ Portfólio Terminal Style
Bem-vindo ao meu portfólio pessoal interativo. Este projeto simula um ambiente de terminal Linux (CLI) rodando diretamente no navegador, desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS).

🚀 Funcionalidades
Interface de Terminal: Simulação de input/output de comandos.

Navegação Semântica: Comandos como ./sobre e ./projetos carregam conteúdo dinamicamente.

Efeito Matrix: Um canvas animado ao fundo gerando uma chuva de códigos binários e hexadecimais.

Responsividade: O layout se adapta a desktops e dispositivos móveis.

Estrutura Limpa: Código organizado sem dependência de frameworks externos.

🕹️ Como Usar (Para Visitantes)
A interface foi desenhada para ser intuitiva, mesmo simulando um ambiente de linha de comando:

Menu de Comandos: No centro da tela, você verá botões que simulam comandos do terminal:

./sobre: Executa um script que exibe meu resumo profissional e stack técnica.

./projetos: Lista meus projetos recentes (como o VitalMen e Dupla Energia).

./contato: Exibe meus canais de comunicação (Email, LinkedIn, GitHub).

clear: Limpa o histórico do terminal, deixando a tela vazia novamente.

Interação: Ao clicar em um comando, o sistema processa a requisição e "imprime" a resposta na tela, rolando automaticamente para a linha mais recente.

🛠️ Guia de Manutenção (Para Desenvolvedores)
Se você quiser clonar e editar este portfólio, aqui está como a estrutura funciona:

1. Adicionar/Editar Conteúdo (index.html)
O conteúdo não fica solto no HTML, ele está encapsulado em tags <template>. Isso impede que o texto apareça antes de ser solicitado.

Para mudar o texto "Sobre", edite o conteúdo dentro de <template id="tpl-sobre">.

Para adicionar um novo projeto, duplique a div com a classe project-item dentro de <template id="tpl-projetos">.

2. Personalizar o Matrix (script.js)
Você pode alterar os caracteres que caem na chuva de código editando a variável chars:

JavaScript
// Linha 48 do script.js
const chars = '01YOU2CAN3CHANGE4THIS5TEXT';
3. Alterar Cores (style.css)
O tema usa um verde neon clássico. Para mudar a cor principal, busque por #33ff00 e substitua pela cor hexadecimal de sua preferência (ex: #00d2ff para um tema Cyberpunk Azul).

📦 Como Rodar Localmente
Clone este repositório:

Bash
git clone https://github.com/icarofranklin/portfolio.git
Entre na pasta:

Bash
cd portfolio
Abra o arquivo index.html em seu navegador preferido.

📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar o código como base para seu próprio portfólio!

Desenvolvido por Ícaro Ferreira Franklin