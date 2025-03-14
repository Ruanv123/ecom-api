import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TweetsModule } from './tweets/tweets.module';
import { InventoryModule } from './modules/inventory/inventory.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: 5432,
      username: 'usuario',
      password: 'password',
      database: 'ecommerce',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TweetsModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
