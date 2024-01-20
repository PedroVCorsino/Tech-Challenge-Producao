import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { PedidoController } from './controllers/pedido.controller';
import { PEDIDO_SERVICE_TOKEN } from './services/interfaces/pedido.service.interface';
import { PedidoService } from './services/pedido.service';
import { PedidoRepository } from './repositories/pedido.repository';
import { PEDIDO_REPOSITORY_TOKEN } from './repositories/interfaces/pedido.repository.interface';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
        password: 'authpassword'
      }
    })
    // Outros módulos se necessário
  ],
  controllers: [PedidoController],
  providers: [
    {
      provide: PEDIDO_SERVICE_TOKEN,
      useClass: PedidoService,
    },
    {
      provide: PEDIDO_REPOSITORY_TOKEN,
      useClass: PedidoRepository,
    },
  ],
})
export class AppModule {}
