import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssistantsModule } from './modules/assistant/assistants.module';
import { ConfigModule } from '@nestjs/config';
import { APP_CONFIG, OPEN_AI_CONFIG } from './configs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [APP_CONFIG, OPEN_AI_CONFIG],
    }),
    AssistantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
