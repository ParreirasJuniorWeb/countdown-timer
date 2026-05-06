# ⏰ Countdown Timer React

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-4.x-orange.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Sistema de Contagem Regressiva em React JS** com manipulação avançada de datas. Permite que usuários criem contadores personalizados para eventos especiais com cálculo preciso de **dias, horas, minutos e segundos** restantes.

## ✨ **Funcionalidades Principais**

- ✅ **Criação de Contadores**: Descrição e data do evento
- ✅ **Contagem em Tempo Real**: Dias, Horas, Minutos e Segundos
- ✅ **Temas Personalizáveis**: Light, Dark e Custom
- ✅ **Cores Personalizadas**: Paleta completa de cores
- ✅ **Imagens de Fundo**: Upload e seleção de backgrounds
- ✅ **Múltiplos Contadores**: Gerencie vários eventos simultaneamente
- ✅ **Responsivo**: Funciona perfeitamente em mobile e desktop
- 🎨 **Animações Suaves**: Interface moderna e fluida

## 🛠 **Tecnologias Utilizadas**

```bash
├── React JS (18.x)
├── TypeScript / JavaScript ES6+
├── Vite (Build Tool)
├── Tailwind CSS / Styled-Components
├── Date-fns (Manipulação de Datas)
├── React Hook Form (Formulários)
├── Framer Motion (Animações)
└── LocalStorage (Persistência)
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
 - **Node.js** (versão 16 ou superior)
 - **Fio NPM** OU

### Instalação Rápida
```
# Clonar o repositório
git clone <URL_DO_SEU_REPOSITORIO>

# Entrar no diretório
cd countdown-timer-react

# Instalar dependências
npm install
# ou
yarn install
```

### Execução
```
# Modo Desenvolvimento
npm run dev
# ou
yarn dev

# Build para Produção
npm run build
# ou
yarn build
```

**Acesse: http://localhost:5173** (Vite) ou **http://localhost:3000** (Create React App)

## 📱 Demonstração Visual

| Funcionalidade | Prévia |
| ------------- | ------ |
| Criação de Evento | ! [Criação](documentação/creation.png |
| Contador Principal | ! [Contador](documentação/contagem_regressiva.png  |
| Personalização  | ! [Temas](documentação/customize.png    |
| Múltiplos Eventos | ! [Lista](documentação/events-list.png | 

> ### "Adicione suas capturas de tela nas pastas `docs/` ou `public/images/`"

### Personalização disponível

```
🌙 Temas:
- Light Mode (Padrão)
- Dark Mode
- Gradient Mode
- Custom CSS Variables

🎨 Cores:
- Cor principal do contador
- Cor de fundo
- Cor do texto
- Cores dos separadores

🖼️ Backgrounds:
- Upload de imagem personalizada
- Galeria de imagens pré-definidas
- Gradientes dinâmicos
```

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── CountdownTimer.jsx
│   ├── EventForm.jsx
│   ├── ThemeSelector.jsx
│   ├── BackgroundUploader.jsx
│   └── EventList.jsx
├── hooks/
│   ├── useCountdown.js
│   └── useLocalStorage.js
├── utils/
│   ├── dateUtils.js
│   └── themeUtils.js
├── styles/
└── App.jsx
```

⚙️ ## Como funciona o cálculo de datas
```
// Exemplo do algoritmo de contagem
const calculateTimeLeft = (targetDate) => {
  const difference = targetDate - new Date();
  
  let timeLeft = {};
  
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  
  return timeLeft;
};
```

## 🚀 Recursos Avançados
 - **Persistência Local**: Dados salvos no LocalStorage
 - **Notificações**: Alertas quando o evento está próximo
 - **Compartilhamento**: Link único para cada contador
 - **Exportar/Importar**: Backup dos eventos
 - **Modo Tela Cheia**: Visualização imersiva

## 📱 Responsividade
```
📱 Mobile First Design
💻 Desktop Otimizado
📺 TV / Large Screens
⌚ Smartphones modernos
```

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie uma branch** (**`git checkout -b feature/nova-funcionalidade`**)
3. **Commit** suas mudanças (**`git commit -m 'feat: adiciona nova funcionalidade`**')
4. **Empurrar** para um ramo (**`git push origin feature/nova-funcionalidade`**)
5. **Abra um Pull Request**

## 🐛 Relatório

 - [ ] Verifique se o problema já foi reportado
 - [ ] Descreva o problema detalhadamente
 - [ ] Inclua screenshots ou vídeo
 - [ ] Informe versão do navegador e SO

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](https://app.blackbox.ai/LICENSE) para mais detalhes.

## 🙋‍♂️ Autor

Desenvolvido com ⏰ e ❤️ por [ParreirasJuniorWeb](https://github.com/ParreirasJuniorWeb/).

<div align="center">
  <a href="https://www.linkedin.com/in/jv" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" width="400" alt="LinkedIn" />
  </a>  
  <a href="https://github.com/ParreirasJuniorWeb" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" width="400" alt="GitHub" />
  </a>
  <a href="https://portfolio-react-sass-omega.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-000?style=for-the-badge&logo=react&logoColor=white" width="400" alt="Portfólio" />
  </a>
</div>

<br>
<br>

<div align="center">
  <strong>Transforme datas em momentos inesquecíveis! ✨ </strong><br> 
  <img src="https://media.giphy.com/media/3o7aDgf1211jJFzmEu/giphy.gif" width="200"> 
</divisão>
