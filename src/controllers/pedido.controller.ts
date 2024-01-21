import { Body, Controller, Post, Get, Param, Put, Delete, Inject, NotFoundException, Patch } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { Pedido } from '../models/pedido.model';
import { IPedidoService } from '../services/interfaces/pedido.service.interface';
import { PEDIDO_SERVICE_TOKEN } from '../services/interfaces/pedido.service.interface';
import { UpdateStatusDto } from 'src/models/dtos/update-status.dto';

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

  @Get(':id/status')
  @ApiOperation({ summary: 'Obter o status de um pedido pelo ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID do pedido' })
  @ApiResponse({ status: 200, description: 'Status do pedido encontrado.' })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado.' })
  async getStatus(@Param('id') id: string): Promise<{ status: string }> {
    const pedido = await this.pedidoService.findById(id);
    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado.');
    }
    return { status: pedido.status };
  }

  @Get('/status/:status')
  @ApiOperation({ summary: 'Obter pedidos por status' })
  @ApiParam({ name: 'status', description: 'Status do pedido' })
  @ApiResponse({ status: 200, description: 'Pedidos encontrados.' })
  @ApiResponse({ status: 404, description: 'Nenhum pedido encontrado.' })
  async findByStatus(@Param('status') status: string): Promise<Pedido[]> {
    const pedidos = await this.pedidoService.findByStatus(status);
    if (pedidos.length === 0) {
      throw new NotFoundException('Nenhum pedido encontrado com este status.');
    }
    return pedidos;
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Atualizar o status de um pedido' })
  @ApiParam({ name: 'id', type: String, description: 'ID do pedido' })
  @ApiResponse({ status: 200, description: 'Status do pedido atualizado.' })
  @ApiResponse({ status: 404, description: 'Pedido não encontrado.' })
  async updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateStatusDto,
  ): Promise<any> {
    return this.pedidoService.updateStatus(id, updateStatusDto.status);
  }

}
