# case-mais-controle
## Back-end
- Para executar o aplicativo é necessário ter o rquivo ".env" com a variável global "ACCESS_KEY_HGBRASIL" com a chave de acesso para a pesquisa no site "https://hgbrasil.com/status/finance";
- Definir no arquivo "setup.ts":
- 1)a URL do webhook para a simulação de envio de notificação;
- 2)o intervalo de tempo entre as consultas, inicialmente definido com 5 minutos pelo enunciado do teste;
- Foi desenvolvida uma função (sleep) para execução da pausa dos intervalos das consultas;
- A rotina das notificções foram implementadas no arquivo "services.ts";
- O body para a requisição da API está no seguinte formato: {
                                                        "symbol": string,
                                                        "minPrice": number,
                                                        "maxPrice": number
                                                    };
- foi utilizada a porta 3003 local para o listen do app do express.
- O aplicativo retorna uma mensagem de desativação do monitoramento quando encontra algum erro de consulta ou quando é atingido o valor máximo ou mínimo da ação.
