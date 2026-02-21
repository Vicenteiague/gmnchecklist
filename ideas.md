# GMN Checklist - Design Brainstorm

## Abordagem Selecionada: Glassmorphism Moderno com Dark Mode Automático

### Design Movement
**Glassmorphism + Neumorphism Soft** - Uma fusão de superfícies translúcidas com sombras suaves, criando profundidade sem dureza visual. Inspirado em design systems modernos como Apple iOS 15+ e Figma.

### Core Principles
1. **Transparência Inteligente**: Uso estratégico de `backdrop-filter` e `rgba` para criar camadas de profundidade
2. **Contraste Suave**: Cores de alto contraste para legibilidade, mas com transições suaves entre estados
3. **Minimalismo Funcional**: Cada elemento serve um propósito visual e funcional
4. **Acessibilidade Prioritária**: Dark mode automático baseado em preferências do sistema, textos sempre legíveis

### Color Philosophy
- **Light Mode**: Fundo branco puro (`#FFFFFF`), com cartões em vidro translúcido (`rgba(255,255,255,0.7)`)
- **Dark Mode**: Fundo escuro (`#0F172A`), com cartões em vidro translúcido (`rgba(30,41,59,0.7)`)
- **Accent Colors**: Azul vibrante (`#3B82F6`) para CTAs e indicadores de progresso
- **Reasoning**: Glassmorphism exige alto contraste para legibilidade; cores frias (azul) transmitem confiança para formulários

### Layout Paradigm
- **Hero Section**: Título grande com descrição, progresso visual em barra horizontal
- **Grid Assimétrico**: Campos em 2 colunas no desktop, 1 coluna no mobile
- **Card-Based**: Cada seção de campos em cartão com borda tracejada colorida (indicador de preenchimento)
- **Sticky Footer**: Botão "Enviar para WhatsApp" fixo na base com progresso em tempo real

### Signature Elements
1. **Cartões com Borda Tracejada Colorida**: Cada campo tem uma borda tracejada que muda de cor conforme preenchimento (laranja → verde)
2. **Badge Numerado**: Pequeno badge no canto superior direito de cada cartão mostrando número do campo
3. **Ícone de Progresso Circular**: Indicador visual circular no header mostrando % de preenchimento

### Interaction Philosophy
- **Hover States**: Cartões ganham sombra maior e backdrop blur aumenta
- **Focus States**: Input focado ganha borda sólida com cor primária
- **Transições**: Todas as mudanças de estado com `transition: all 0.3s ease`
- **Feedback Imediato**: Progresso atualiza em tempo real conforme usuário digita

### Animation
- **Entrance**: Cartões fazem fade-in + slide-up ao carregar
- **Progress Bar**: Animação suave de width ao atualizar progresso
- **Button Hover**: Botão "Enviar" ganha glow effect ao hover
- **Ripple Effect**: Clique no botão gera efeito ripple sutil

### Typography System
- **Display**: "Poppins Bold" para títulos principais (h1, h2)
- **Body**: "Inter Regular" para textos e labels
- **Mono**: "JetBrains Mono" para valores de progresso percentual
- **Hierarchy**: h1 (32px), h2 (24px), body (14px), small (12px)

---

## Implementação Técnica
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4 + Custom CSS para glassmorphism
- **State Management**: React hooks (useState, useEffect)
- **Integration**: WhatsApp Web API para envio de mensagens
- **Dark Mode**: `prefers-color-scheme` media query + CSS variables
