import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfig } from './config/mongo.config';

@Module({
  imports: [UserModule, AuthModule, MongooseModule.forRoot(mongoConfig.uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
