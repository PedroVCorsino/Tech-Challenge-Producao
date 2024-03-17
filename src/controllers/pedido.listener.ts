import { Controller, Inject } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { IPedidoService, PEDIDO_SERVICE_TOKEN } from '../services/interfaces/pedido.service.interface';

@Controller()
export class PedidoListener {
    constructor(
        @Inject(PEDIDO_SERVICE_TOKEN) private readonly pedidoService: IPedidoService
      ) {}



      // @MessagePattern('producaoQueue') // Substitua 'producaoQueue' pelo valor exato esperado.
      // handleMessage(data: any) {
      //   console.log(data);
      // }
      
  // @MessagePattern('producaoQueue')
  // public async handleProducaoMessage(@Payload() data: any, @Ctx() context: RmqContext) {
  //   console.log("Chegou aqui!")
  //   const channel = context.getChannelRef();
  //   const originalMsg = context.getMessage();
    
  //   console.log(`Recebendo mensagem na fila producaoQueue: ${JSON.stringify(data)}`);
  //   await this.pedidoService.createPedido(data); 
  //   channel.ack(originalMsg);
  //   return { message: 'Pedido criado com sucesso.' };
    
  // }
}
