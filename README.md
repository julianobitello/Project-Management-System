# 📊 Sistema de Gerenciamento de Projetos

Uma aplicação de gerenciamento de projetos desenvolvida com React, TypeScript, Context API e TailwindCSS.

Este projeto simula um sistema simples de controle de tarefas e projetos, permitindo criar projetos, adicionar tarefas, marcar como concluído e persistir os dados no localStorage.

---

# 🚀 Funcionalidades

## 📁 Projetos

- Criar novos projetos
- Excluir projetos
- Marcar projetos como concluídos

## ✅ Tarefas

- Adicionar tarefas dentro de projetos
- Excluir tarefas
- Marcar tarefas como concluídas / pendentes

## 💾 Persistência de dados

- Dados salvos automaticamente no `localStorage`

## 🌐 Gerenciamento de estado

- Estado global utilizando Context API
- Eliminação de prop drilling

---

# 🧠 O que eu aprendi

Este projeto foi desenvolvido com foco no aprendizado de React e arquitetura frontend:

- Componentização e reutilização de componentes
- Gerenciamento de estado com `useState` e `useEffect`
- Context API para estado global
- Custom hook (`useProjects`)
- Manipulação de formulários no React
- Atualização imutável de estado
- Tipagem com TypeScript
- Persistência com localStorage
- Estruturação básica de UI com TailwindCSS

---

# 🏗 Tecnologias utilizadas

- React
- TypeScript
- Context API
- TailwindCSS
- Vite

---

# 📂 Estrutura do projeto

src/
├── components/
│   ├── Dashboard/
│   ├── ProjectCard/
│   ├── TaskItem/
│   └── Sidebar/
│
├── context/
│   ├── ProjectContext.tsx
│   └── ProjectProvider.tsx
│
├── pages/
│   └── Home.tsx
│
├── types/
│   └── Project.ts
│
├── App.tsx
└── main.tsx

---

# 📸 Preview

> Adicione prints ou GIFs do projeto após o deploy.

---

# ▶️ Como rodar o projeto

```bash
# clonar o repositório
git clone https://github.com/seu-usuario/sistema-gerenciador-projetos.git

# entrar na pasta
cd sistema-gerenciador-projetos

# instalar dependências
npm install

# rodar o projeto
npm run dev
```

🌱 Melhorias futuras (V2)

- Layout estilo Kanban (To Do / Em andamento / Concluído)
- Drag and drop de tarefas
- Filtros por status
- Sistema de busca e ordenação
- Melhorias de UI/UX
- Sistema de autenticação (opcional)

📌 Status

✔ Versão 1 finalizada  
🚧 Pronto para evolução para V2 (Kanban)

👨‍💻 Autor
Projeto desenvolvido com foco em aprendizado de React, TypeScript e arquitetura de aplicações frontend.
