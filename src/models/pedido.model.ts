import { ApiProperty } from '@nestjs/swagger';

export class Pedido {
  @ApiProperty({ example: '123', description: 'Identificador único do pedido' })
  id: string;

  @ApiProperty({ example: 'Produto X', description: 'Nome ou descrição do produto' })
  produto: string;

  @ApiProperty({ example: 10, description: 'Quantidade do produto pedido' })
  quantidade: number;

  @ApiProperty({ example: 50.0, description: 'Preço total do pedido' })
  preco: number;

  @ApiProperty({ example: 'pendente', description: 'Status do pedido' })
  status: string;

  constructor(id: string, produto: string, quantidade: number, preco: number, status: string) {
    this.id = id;
    this.produto = produto;
    this.quantidade = quantidade;
    this.preco = preco;
    this.status = status;
  }
}
