// src/services/interfaces/pedido.service.interface.ts

import { Pedido } from '../../models/pedido.model';

export const PEDIDO_SERVICE_TOKEN = 'IPedidoService';

export interface IPedidoService {
  createPedido(pedidoData: Pedido): Promise<Pedido>;
  findAll(): Promise<Pedido[]>;
  findById(id: string): Promise<Pedido>;
  updatePedido(id: string, pedidoData: Pedido): Promise<Pedido>;
  deletePedido(id: string): Promise<void>;
}
