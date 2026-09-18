import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './modules/products/product.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/user.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Mantém mysql
      url: process.env.DATABASE_URL, // Lê a URI inteira do Aiven
      autoLoadEntities: true,
      synchronize: true, // Cria as tabelas automaticamente
      ssl: {
        rejectUnauthorized: false, // OBRIGATÓRIO para o Aiven (ssl-mode=REQUIRED)
      },
    }),

    ProductsModule,
    UsersModule,

    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'backend',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}