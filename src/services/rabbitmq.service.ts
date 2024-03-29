import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { IPedidoService, PEDIDO_SERVICE_TOKEN } from '../services/interfaces/pedido.service.interface';

@Injectable()
export class RabbitMQService implements OnModuleInit {  
  constructor(
    @Inject(PEDIDO_SERVICE_TOKEN) private readonly pedidoService: IPedidoService
  ) {}

  async onModuleInit() {
    this.connectAndConsume();
  }
  

  private async connectAndConsume() {
    try {
      const connection = await amqp.connect(`amqp://${RABBIT_USER}:${RABBIT_PASSWORD}@${RABBIT_HOST}`);
      const channel = await connection.createChannel();
      const queue = 'producaoQueue';

      await channel.assertQueue(queue, { durable: false });
      console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);

      channel.consume(queue, async (msg) => {
        if (msg !== null) {
          const firstParseResult = JSON.parse(msg.content.toString());
          console.log("Resultado após a primeira deserialização:", firstParseResult);
      
          let pedidoData;
    
          if (typeof firstParseResult === 'string') {
            console.log("A mensagem foi stringificada duas vezes. Deserializando novamente...");
            pedidoData = JSON.parse(firstParseResult);
          } else {
            pedidoData = firstParseResult;
          }
    
          console.log("pedidoData é agora um objeto:", pedidoData);
      
          if (pedidoData && pedidoData.data) {
            console.log("Processando os dados do pedido:", pedidoData.data);
            await this.pedidoService.createPedido(pedidoData.data);
            channel.ack(msg);
          } else {
            console.log("Não foi possível encontrar a propriedade 'data'.");
          }
        }
      });
      
      
    } catch (error) {
      console.error('Error connecting to RabbitMQ:', error);
    }
  }
}
