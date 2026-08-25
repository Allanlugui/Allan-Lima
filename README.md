# Allan Luiz Silveira Lima - Portfólio Profissional

> **Especialista em Manutenção Eletromecânica, Predial e Infraestrutura | Desenvolvedor Full-Stack**  
> São Paulo - SP, Brasil • [LinkedIn](https://www.linkedin.com/in/allan-ls-lima) • WhatsApp: (11) 91577-7803

---

## ⚡ Sobre o Projeto

Este é o portfólio profissional oficial e interativo de **Allan Luiz Silveira Lima**, construído com tecnologias modernas da web para destacar sua trajetória técnica em manutenção de infraestrutura predial/elétrica crítica (ATS Serviços Especiais, JLL Facilities) e sua atuação em desenvolvimento de software Full-Stack.

### Principais Recursos:
- 🌐 **Internacionalização completa (i18n)**: Suporte fluido para Português (PT-BR), Inglês (EN) e Espanhol (ES).
- 📋 **Currículo Interativo & Impressão PDF**: Visualização formatada para recrutadores com impressão direta em PDF (Ctrl+P / ⌘+P).
- 🛠️ **Galeria de Projetos**: Filtros dinâmicos por categorias (Painéis QGBT, Geradores & UPS, Termografia Preditiva, Hidráulica, Civil & Epóxi, Desenvolvimento Full-Stack & TI).
- 🧮 **Ferramenta de Dimensionamento Elétrico & Assistente IA**: Cálculo de queda de tensão (NBR 5410) e assistente técnico alimentado pelo Google Gemini 3.7.
- 📞 **Referências para Recrutadores**: Seção dedicada com contato direto do encarregado de manutenção na JLL (Antoniel) para validação de histórico.
- 🎛️ **Painel Administrativo (CMS)**: Sistema seguro para edição e gestão de projetos e dados de contato.

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Motion (Framer Motion)](https://motion.dev/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **IA Generativa**: [@google/genai (Gemini 3.7 Flash)](https://ai.google.dev/)

---

## 🚀 Como Subir para o GitHub e Fazer Deploy na Vercel

### 1. Inicializar e Enviar para o GitHub

Se você baixou os arquivos ou exportou o projeto:

```bash
# 1. Abra o terminal na pasta do projeto
git init

# 2. Adicione todos os arquivos
git add .

# 3. Crie o primeiro commit
git commit -m "feat: portfolio allan luiz pronto para producao"

# 4. Conecte com o seu repositório no GitHub (substitua com o seu link)
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/allan-portfolio.git

# 5. Envie o código
git push -u origin main
```

---

### 2. Fazer Deploy na Vercel (Passo a Passo)

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do **GitHub**.
2. Clique no botão **"Add New..."** e selecione **"Project"**.
3. Na lista de repositórios, localize `allan-portfolio` e clique em **"Import"**.
4. A Vercel detectará automaticamente as configurações:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. *(Opcional)* Na seção **"Environment Variables"**, adicione as seguintes variáveis:
   - `GEMINI_API_KEY`: Sua chave de API do Google AI Studio (para ativar o assistente de IA).
   - `ADMIN_PASSWORD`: Senha personalizada para o painel administrativo (padrão se omitido: `allan2026`).
6. Clique no botão **"Deploy"**.
7. Em menos de 2 minutos, seu portfólio estará online com domínio gratuito `.vercel.app` e certificado SSL automático!

---

## 💻 Como Rodar Localmente

```bash
# 1. Instalar as dependências
npm install

# 2. Criar o arquivo de variáveis de ambiente
cp .env.example .env.local

# 3. Iniciar o servidor de desenvolvimento
npm run dev

# 4. Abrir no navegador
# Acesse http://localhost:3000
```

---

## 📬 Contato

- **Nome**: Allan Luiz Silveira Lima
- **E-mail**: [jallanluiz@gmail.com](mailto:jallanluiz@gmail.com)
- **WhatsApp**: [+55 (11) 91577-7803](https://wa.me/5511915777803)
- **LinkedIn**: [linkedin.com/in/allan-ls-lima](https://www.linkedin.com/in/allan-ls-lima)
- **Endereço**: Rua José de Barros Magaldi, 1557, Jardim São João, CEP 05815-010, São Paulo - SP
