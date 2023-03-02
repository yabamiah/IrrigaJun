# IrrigaJun

Este projeto é um aplicativo móvel desenvolvido com o framework Ionic que permite o controle de um sistema de irrigação automático através do protocolo de comunicação MQTT.

O objetivo deste aplicativo é fornecer uma interface fácil e intuitiva para os usuários controlarem a irrigação de suas plantas, permitindo que eles ajustem as configurações de acordo com suas necessidades.

## Pré-requisitos
Antes de começar, é necessário ter instalado em sua máquina o seguinte software:

1. Node.js
2. Ionic CLI
3. MQTT Broker (como o Mosquitto)

## Instalação

1. Clone o repositório em sua máquina local.
2. Abra o terminal e navegue até o diretório do projeto.
3. Execute o comando npm install para instalar as dependências do projeto.
4. Edite o arquivo src/environments/environment.ts com as informações do seu MQTT Broker.
5. Execute o comando ionic serve para iniciar o servidor local e visualizar o aplicativo em seu navegador.

## Uso

Para utilizar o aplicativo, é necessário ter um sistema de irrigação automático que utilize o protocolo MQTT para se comunicar. É possível configurar as informações de conexão do sistema de irrigação no aplicativo.

Após conectar o sistema de irrigação, o usuário pode ajustar as configurações de irrigação, como a frequência de irrigação e a duração da irrigação.

O aplicativo também permite que o usuário visualize o histórico de irrigação, exibindo informações como a data e hora da irrigação e a quantidade de água utilizada.

## Licença

Este projeto foi feito pelea [EletronJun](https://eletronjun.com.br/) é licenciado sob a licença Mozilla Public License 2.0. Consulte o arquivo LICENSE para obter mais informações.

![EletronJun](src/assets/icon/EletronJun-logo.png)