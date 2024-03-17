import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SecretsService } from './external/secrets.service';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug']
  });
  
  const secretsService = app.get(SecretsService);
  const rabbitMQConfig = await secretsService.getSecret('rabbitmq');

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Tech-Challenge-Produção')
    .setDescription('Microserviço responsável por acompanhar a produção/fila de pedidos e atualização de status')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [`amqp://${rabbitMQConfig.username}:${rabbitMQConfig.password}@${rabbitMQConfig.host}:${rabbitMQConfig.port}`],
  //     queue: 'producaoQueue',
  //     queueOptions: {
  //       durable: false
  //     },

  //   },
  // });
  

  // await app.startAllMicroservices();
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
