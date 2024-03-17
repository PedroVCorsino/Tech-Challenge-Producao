import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Pedido } from 'src/models/pedido.model';

@Injectable()
export class ProducaoService {
  constructor(@Inject('RABBITMQ_CLIENT') private client: ClientProxy) {}

  async enviarParaProducao(pedido: Pedido) {
    return this.client.emit<Pedido>('producaoKey', pedido);
  }
}
