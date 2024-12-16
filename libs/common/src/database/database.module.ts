import { CarBrand } from '@app/common/entity';
import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [NestConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          host: configService.get('PG_HOST'),
          port: configService.get('PG_PORT'),
          username: configService.get('PG_USERNAME'),
          password: configService.get('PG_PASSWORD'),
          database: configService.get('PG_NAME'),
          type: 'postgres',
          autoLoadEntities: true,
          entities: [CarBrand],
          logging: true,
          ssl: true,
          synchronize: configService.getOrThrow('STAGE') === 'dev',
        };
      },
    }),
  ],
})
export class DatabaseModule {}
