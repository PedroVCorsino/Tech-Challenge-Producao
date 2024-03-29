# Orquestração
No desenvolvimento do sistema de lanchonete, adotamos o padrão Saga Coordenado para garantir uma execução eficiente do fluxo de criação de pedidos. Este padrão nos permite orquestrar com precisão as operações distribuídas necessárias para processar um pedido do início ao fim, assegurando a consistência e a integridade do sistema como um todo.

## 1. Início do Processo de Criação de Pedido:
   O processo é iniciado com a criação de um novo pedido. Este passo inicial é crucial, pois estabelece a base para as operações subsequentes, garantindo que todas as informações necessárias estejam corretamente registradas e prontas para serem processadas nas etapas seguintes.
![Tech05](https://github.com/PedroVCorsino/Tech-Challenge-Pedidos/assets/61948860/73b3c82d-eba1-41c0-81f0-e49a6ed26072)

No diagrama acima podemos observar que todo pedido quando criado é primeiramente enviado a uma fila, que será consumida pela aplicação e durante o processamento salva os dados do pedido no postgres e encaminha os dados da cobrança para fila de pagamentos
Um micro serviço diferente é responsável por consumir e registrar a cobrança em um serviço de pagamento externo.

## 2. Consulta de Pagamento: 
Após a criação do pedido, o próximo passo é a consulta de pagamento.
![Diagrama em branco](https://github.com/PedroVCorsino/Tech-Challenge-Pedidos/assets/61948860/b26e4d14-ccfc-4811-8587-fd9d896f1a98)

Essa etapa ocorre quando verificamos o status do pagamento associado ao pedido. É um ponto crítico do processo, onde avaliamos se o pedido foi pago e apenas nesse caso o pedido é encaminhado à fila de produção.

## 3. Encaminhamento para a Cozinha: 
Uma vez confirmado o pagamento, o pedido é então encaminhado para a cozinha.  O micro serviço usado pela cozinha para controlar a fila de produção fica escutando por novos pedidos que só são recebidos quando o pagamento está confirmado.
![Diagrama em branco (1)](https://github.com/PedroVCorsino/Tech-Challenge-Pedidos/assets/61948860/15bf8239-b782-45f0-b062-bf9a4dec2cf3)

Aqui, o pedido é preparado de acordo com as especificações recebidas. Continuando com o passo a passo já conhecido nas versões anteriores do sistema.

