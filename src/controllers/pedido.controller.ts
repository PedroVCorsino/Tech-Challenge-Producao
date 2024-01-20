import { Body, Controller, Post, Get, Param, Put, Delete, Inject } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { Pedido } from '../models/pedido.model';
import { IPedidoService } from '../services/interfaces/pedido.service.interface';
import { PEDIDO_SERVICE_TOKEN } from '../services/interfaces/pedido.service.interface';

@ApiTags('pedidos')
@Controller('pedidos')
export class PedidoController {
  constructor(
    @Inject(PEDIDO_SERVICE_TOKEN) private readonly pedidoService: IPedidoService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo pedido' })
  @ApiResponse({ status: 201, description: 'Pedido criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async createPedido(@Body() pedidoData: Pedido) {
    return this.pedidoService.createPedido(pedidoData);
  }

  @Get()
  @ApiOperation({ summary: 'Obter todos os pedidos' })
  @ApiResponse({ status: 200, description: 'Pedidos encontrados.' })
  async getAllPedidos() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um pedido pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID do pedido' })
  @ApiResponse({ status: 200, description: 'Pedido encontrado.' })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado.' })
  async getPedidoById(@Param('id') id: string) {
    return this.pedidoService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um pedido' })
  @ApiParam({ name: 'id', type: String, description: 'ID do pedido a ser atualizado' })
  @ApiResponse({ status: 200, description: 'Pedido atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado.' })
  async updatePedido(@Param('id') id: string, @Body() pedidoData: Pedido) {
    return this.pedidoService.updatePedido(id, pedidoData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um pedido' })
  @ApiParam({ name: 'id', type: String, description: 'ID do pedido a ser deletado' })
  @ApiResponse({ status: 200, description: 'Pedido deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado.' })
  async deletePedido(@Param('id') id: string) {
    return this.pedidoService.deletePedido(id);
  }
}
