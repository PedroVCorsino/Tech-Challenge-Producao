// src/services/pedido.service.ts

import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { Pedido } from '../models/pedido.model';
import { IPedidoRepository } from '../repositories/interfaces/pedido.repository.interface';
import { IPedidoService } from './interfaces/pedido.service.interface';

@Injectable()
export class PedidoService implements IPedidoService {
  constructor(
    @Inject('IPedidoRepository') private readonly pedidoRepository: IPedidoRepository
  ) {}

  async createPedido(pedidoData: Pedido): Promise<Pedido> {
    const existingPedido = await this.pedidoRepository.findById(pedidoData.id.toString());
    if (existingPedido) {
      // Se um pedido com o mesmo ID já existir, lance um erro
      throw new ConflictException(`Um pedido com o ID ${pedidoData.id} já existe.`);
    }

    // Se não existir, crie um novo pedido
    return this.pedidoRepository.savePedido(pedidoData);
  }

  async findById(id: string): Promise<Pedido> {
    return this.pedidoRepository.findById(id);
  }

  async updatePedido(id: string, pedidoData: Pedido): Promise<Pedido> {
    return this.pedidoRepository.updatePedido(id, pedidoData);
  }

  async deletePedido(id: string): Promise<void> {
    return this.pedidoRepository.deletePedido(id);
  }

  async updateStatus(id: string, status: string): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findById(id);
    if (!pedido) {
      throw new Error('Pedido não encontrado.');
    }
    pedido.status = status;
    return this.pedidoRepository.updatePedido(id, pedido);
  }

  async findByStatus(status: string): Promise<Pedido[]> {
    return this.pedidoRepository.findByStatus(status);
  }

}
