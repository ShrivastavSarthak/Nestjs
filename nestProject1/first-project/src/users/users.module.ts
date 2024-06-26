import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './coltrollers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { MiddlewareBuilder } from '@nestjs/core';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware)
      .forRoutes(UsersController)
      .apply(AnotherMiddleware)
      .forRoutes(UsersController);
  }
}
