# Amigo Secreto - UniAmigos

![Amigo Secreto](https://gustavuhh1.github.io/amigo-secreto-unifor/banner.png)

Este é um projeto de **sorteador de amigo secreto**, desenvolvido como trabalho final da disciplina **Ambiente e Desenvolvimento de Software** na Universidade de Fortaleza (**UNIFOR**).

## 🌐 Link para o projeto

Acesse a aplicação: [Amigo Secreto - UniAmigos](https://gustavuhh1.github.io/amigo-secreto-unifor)

## 🛠⚙ Tecnologias utilizadas

- [React](https://react.dev/) - Biblioteca para criação de interfaces de usuário
- [Vite](https://vitejs.dev/) - Ferramenta de build e desenvolvimento
- [React Router](https://reactrouter.com/) - Biblioteca para navegação SPA
- [ESLint](https://eslint.org/) - Ferramenta de linting para código JavaScript e React
- [gh-pages](https://www.npmjs.com/package/gh-pages) - Publicação em GitHub Pages

## 🎯 Funcionalidades principais

- Cadastro de participantes.
- Sorteio automático de pares para o amigo secreto.
- Interface amigável e responsiva.
- Publicação no GitHub Pages para fácil acesso.

## 🔧 Como executar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/gustavuhh1/amigo-secreto-unifor.git
cd amigo-secreto-unifor
```

### 2. Instalar as dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, execute:

```bash
npm install
```

### 3. Executar o ambiente de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173).

### 4. Build para produção

Para gerar os arquivos otimizados para produção, execute:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### 5. Publicar no GitHub Pages

```bash
npm run deploy
```

## 📓 Estrutura de arquivos

```plaintext
.
├── dist/                # Arquivos gerados para produção
├── node_modules/        # Dependências do projeto
├── public/              # Arquivos públicos
├── src/                 # Código-fonte principal
│   ├── assets/          # Arquivos estáticos (imagens, fontes, etc.)
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── Footer.jsx   # Componente Footer
│   │   ├── Footer.css   # Estilos do Footer
│   │   ├── home.jsx     # Componente da página inicial
│   │   ├── home.css     # Estilos da página inicial
│   │   ├── main.jsx     # Componente principal
│   │   ├── main.css     # Estilos do componente principal
│   │   ├── secret.jsx   # Componente do sorteio
│   │   └── secret.css   # Estilos do sorteio
│   ├── App.jsx          # Componente raiz
│   └── index.css        # Estilos globais
├── .env                 # Configuração de variáveis de ambiente
├── .env.example         # Exemplo de configuração do .env
├── .gitignore           # Arquivos ignorados pelo Git
├── eslint.config.js     # Configuração do ESLint
├── index.html           # Página HTML principal
├── LICENSE              # Licença do projeto
├── package-lock.json    # Lockfile do NPM
├── package.json         # Configuração do projeto
├── README.md            # Documentação do projeto
└── vite.config.js       # Configuração do Vite
```

## 🚀 Melhorias futuras

- Adicionar a opção de enviar convites por e-mail aos participantes.
- Implementar suporte multilinguagem.
- Adicionar tema escuro.

## 👤 Autor

Desenvolvido por [Gustavo](https://github.com/gustavuhh1), [João](https://github.com/joaooliveiradev1) e [Rodrigo](https://github.com/RodrigoFacanha) para o curso de Ambientes desenvolvimento de software (ADS) na UNIFOR.

## 🔒 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

