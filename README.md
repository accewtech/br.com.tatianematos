# Projeto feito com PayloadCMS

O modelo foi configurado com o mínimo necessário para começar qualquer projeto. (PayloadCMS blank)

## Início Rápido

Este modelo pode ser implantado diretamente a partir do nosso serviço de hospedagem na nuvem, configurando MongoDB e armazenamento de objetos S3 para mídia.

Para rodar este modelo localmente, siga os passos abaixo:

- Ambiente de Desenvolvimento: `yarn dev`
- Ambiente de Produção: `yarn build && yarn start`

### Desenvolvimento

1. Clone o projeto e copie as variáveis de ambiente, como no exemplo. Você precisará adicionar a variável `MONGODB_URL` do seu projeto na nuvem ao seu arquivo `.env` se quiser usar o armazenamento S3 e o banco de dados MongoDB criado para você.
2. Execute `pnpm` ou `yarn install && yarn dev` para instalar as dependências e iniciar o servidor de desenvolvimento.
3. Abra `http://localhost:3000` para acessar o aplicativo no seu navegador.

É isso! Alterações feitas em `./src` serão refletidas no seu aplicativo. Siga as instruções na tela para fazer login e criar seu primeiro usuário administrador.

Depois, confira a seção [Produção](#producao) quando estiver pronto para construir e servir seu aplicativo, e [Implantação](#implantacao) quando estiver pronto para ir ao ar.

#### Docker (Opcional)

Se preferir usar Docker para desenvolvimento local em vez de uma instância local do MongoDB, o arquivo docker-compose.yml fornecido pode ser usado.

Para isso, siga os passos abaixo:

- Modifique o `MONGODB_URL` no seu arquivo `.env` para `mongodb://127.0.0.1/<dbname>`
- Modifique o arquivo `docker-compose.yml` para que o `MONGODB_URL` corresponda ao `<dbname>` acima
- Execute `docker-compose up` para iniciar o banco de dados, opcionalmente passe `-d` para rodar em segundo plano.

## Como funciona

A configuração do Payload é adaptada especificamente para as necessidades da maioria dos sites. Está pré-configurada das seguintes maneiras:

### Coleções

Consulte a documentação de [Coleções](https://payloadcms.com/docs/configuration/collections) para detalhes sobre como estender essa funcionalidade.

- #### Usuários (Autenticação)

  Usuários são coleções habilitadas para autenticação que têm acesso ao painel de administração.

  Para ajuda adicional, veja o [Exemplo de Autenticação](https://github.com/payloadcms/payload/tree/main/examples/auth) oficial ou a documentação de [Autenticação](https://payloadcms.com/docs/authentication/overview#authentication-overview).

- #### Mídia

  Esta é a coleção habilitada para uploads. Possui tamanhos pré-configurados, ponto focal e redimensionamento manual para ajudar a gerenciar suas imagens.

### Docker

Como alternativa, você pode usar o [Docker](https://www.docker.com) para rodar este modelo localmente. Para isso, siga os passos abaixo:

1. Siga [os passos 1 e 2 acima](#desenvolvimento), o arquivo docker-compose usará automaticamente o arquivo `.env` na raiz do seu projeto.
1. Em seguida, execute `docker-compose up`.
1. Siga [os passos 4 e 5 acima](#desenvolvimento) para fazer login e criar seu primeiro usuário administrador.

É isso! A instância Docker ajudará você a começar rapidamente, além de padronizar o ambiente de desenvolvimento entre suas equipes.

## Dúvidas

Se você tiver algum problema ou dúvida, entre em contato conosco no [Discord](https://discord.com/invite/payload) ou inicie uma [discussão no GitHub](https://github.com/payloadcms/payload/discussions).
