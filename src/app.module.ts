import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { HttpModule } from '@nestjs/axios'; // Importação correta para o HttpModule
import { PedidoController } from './controllers/pedido.controller';
import { PEDIDO_SERVICE_TOKEN } from './services/interfaces/pedido.service.interface';
import { PedidoService } from './services/pedido.service';
import { PedidoRepository } from './repositories/pedido.repository';
import { PEDIDO_REPOSITORY_TOKEN } from './repositories/interfaces/pedido.repository.interface';
import { AuthService } from './auth/auth.service'; // Certifique-se de que o caminho está correto
import { AuthController } from './auth/auth.controler';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt/jwt.strategy';
import { NotificacaoService } from './services/notificacao.service';
import { NOTIFICACAO_SERVICE_TOKEN } from './services/interfaces/notificacao.service.interface';

@Module({
  imports: [
    PassportModule.register({
       defaultStrategy: 'jwt' 
      }),
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
        password: 'authpassword'
      }
    }),
    HttpModule,
  ],
  controllers: [
    PedidoController, 
    AuthController
  ],
  providers: [
    {
      provide: PEDIDO_SERVICE_TOKEN,
      useClass: PedidoService,
    },
    {
      provide: NOTIFICACAO_SERVICE_TOKEN,
      useClass: NotificacaoService,
    },
    {
      provide: PEDIDO_REPOSITORY_TOKEN,
      useClass: PedidoRepository,
    },
    AuthService,
    JwtStrategy,
  ],
})
export class AppModule {}
