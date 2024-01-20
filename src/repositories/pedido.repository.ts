// src/repositories/pedido.repository.ts

import { Injectable, Inject } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { Pedido } from '../models/pedido.model';
import { IPedidoRepository } from './interfaces/pedido.repository.interface';

@Injectable()
export class PedidoRepository implements IPedidoRepository {
  constructor(private readonly redisService: RedisService) {}

  async savePedido(pedidoData: Pedido): Promise<Pedido> {
    const client = this.redisService.getClient();
    await client.set(`pedido:${pedidoData.id}`, JSON.stringify(pedidoData));
    return pedidoData;
  }

  async findAll(): Promise<Pedido[]> {
    // Implementação depende do esquema de dados e das limitações do Redis
    // Redis não é otimizado para buscar todos os registros sem uma chave específica
    return []; // Exemplo genérico
  }

  async findById(id: string): Promise<Pedido> {
    const client = this.redisService.getClient();
    const data = await client.get(`pedido:${id}`);
    if (data) {
      return JSON.parse(data);
    } else {
      return null; // Ou lance uma exceção, dependendo da sua lógica de negócio
    }
  }

  async updatePedido(id: string, pedidoData: Pedido): Promise<Pedido> {
    const client = this.redisService.getClient();
    await client.set(`pedido:${id}`, JSON.stringify(pedidoData));
    return pedidoData;
  }

  async deletePedido(id: string): Promise<void> {
    const client = this.redisService.getClient();
    await client.del(`pedido:${id}`);
  }
}
