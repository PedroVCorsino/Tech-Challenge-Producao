// src/services/interfaces/pedido.service.interface.ts

import { PedidoStatus } from 'src/models/dtos/enums/pedido.status.enum';
import { Pedido } from '../../models/pedido.model';

export const PEDIDO_SERVICE_TOKEN = 'IPedidoService';

export interface IPedidoService {
  createPedido(pedidoData: Pedido): Promise<Pedido>;
  findById(id: string): Promise<Pedido>;
  updatePedido(id: string, pedidoData: Pedido): Promise<Pedido>;
  deletePedido(id: string): Promise<void>;
  updateStatus(id: string, status: PedidoStatus): Promise<Pedido>;
  findByStatus(status: string): Promise<Pedido[]>
}
