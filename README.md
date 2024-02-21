# api-test-texo-frontend
 - Criado para rodar na versão 13 do compilador devido a conversa durante o encaminhamento do desafio técnico.


# Docker
sudo docker build --tag=api-test-texo-frontend --rm=true .

sudo docker-compose up

acessar em: http://0.0.0.0:14200/


# Dashboard
 - List years with multiple winners
   - Lista os anos com multiplos vencedores, exibindo os dados como retornam da API
 - Top 3 studios with winners
   - Lista os Studios vencedores, exibindo apenas os 3 com mais títulos.
 - Producers with longest and shortest interval between wins
   - Lista os produtores com maior e menor intervalo entre prêmios consecutivos.
 - List movie winners by year
   - Efetua a busca do(s) ganhadores por ano, informado na caixa de busca.

# List
  - List movies
    - Lista todos os filmes indicados e ganhadores, com a possibilidade de efetuar filtros por ano e filtro por ganhadores, não ganhadores ou todos.

