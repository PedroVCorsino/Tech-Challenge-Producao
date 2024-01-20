// src/services/pedido.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { Pedido } from '../models/pedido.model';
import { IPedidoRepository } from '../repositories/interfaces/pedido.repository.interface';
import { IPedidoService } from './interfaces/pedido.service.interface';

@Injectable()
export class PedidoService implements IPedidoService {
  constructor(
    @Inject('IPedidoRepository') private readonly pedidoRepository: IPedidoRepository
  ) {}

  async createPedido(pedidoData: Pedido): Promise<Pedido> {
    return this.pedidoRepository.savePedido(pedidoData);
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.findAll();
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
}
