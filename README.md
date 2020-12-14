## Como instalar e rodar

Abrir o projeto em um editor de código de preferência. Para esse projeto, foi utilizado o VSCode.
  ### É necessário ter instalado:
   
  [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciador de dependências) 
  [Node.js](https://nodejs.org/en/) 10.13 ou mais novo

Utilizar um dos comandos para instalar as dependências necessárias
```bash
npm install
# ou
yarn install
```

Atualizar as linhas 11, 19 e 27 do arquivo "/lib/configaxios.js" e as linhas 96 e 20 do arquivo "/pages/livros.js" => substituir o URL da API pelo URL do localhost, caso for utilizar: 

  Para o os parâmetos da função fetchData em "/pages/livros.js": 'http://localhost:3000/api/books' 
  
  Paras os métodos POST, PUT e DELETE em "/lib/configaxios.js": 'http://localhost:3000/api/book'
  
  Utilizar um dos comandos para iniciar o servidor local na porta 3000 (OBSERVAÇÃO: O servidor local da API já deve estar iniciado):
```bash
npm run dev
# ou
yarn dev
```

Acessar: [http://localhost:3000](http://localhost:3000)

=================================================================

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
